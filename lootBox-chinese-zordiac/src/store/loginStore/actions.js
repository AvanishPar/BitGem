import {
  loginToLocalStorage,
  logoutFromLocalStorage,
  setLocalStorageItem,
} from "../../common/helpers/localStorageHelpers";
import {
  getAccount,
  getBalance,
  initProviderAndWeb3Instance,
  reqAccountAndSignature,
} from "../../common/helpers/web3Helpers";
import { STORAGES } from "../../constants/appConstants";
import { apiHandler } from "../../services/axios";
import {
  resetAccountDetails,
  setAccountDetails,
  setUserBalance,
  setUserData,
} from "../../store/userStore/actionCreators";
import { setLogin } from "./actionCreator";
import { checkIfLogin } from "../../common/common";
import { getMessageApi, loginApi } from "../../services/loginServices";
import { getUserApi } from "../../services/userServices";

export const login = (username, name, account, signature, message) => {
  console.log(username, name, account, signature, message);
  return async (dispatch, getState) => {
    const { web3Instance } = getState().common;

    await apiHandler(
      () =>
        loginApi(
          username,
          name,
          signature,
          "Are you sure you want to connect with Dapp Music?"
        ),
      {
        onSuccess: async (result) => {
          console.log(result, "result");
          const { _id, token } = result ?? {};

          loginToLocalStorage(token, _id);

          console.log({ result, token });
          dispatch(setLogin({ isLogin: true, token }));

          getBalance(web3Instance, account).then((res) => {
            dispatch(setUserBalance({ eth: res.eth }));
          });
          dispatch(setUserData(result));
        },
        onError: (error, response) => {
          console.error(error);
          const _error =
            typeof response?.data.message === "string"
              ? response?.data.message
              : error;
          throw new Error(_error);
        },
        final: () => {},
      }
    );
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    const isLogin = getState().login.isLogin;

    if (!isLogin) return;

    logoutFromLocalStorage();

    dispatch(resetAccountDetails());
    dispatch(setLogin({}));
    dispatch(setUserData(null));
  };
};

export const getSignInMsg = () => {
  return async (dispatch, getState) => {
    const web3Instance = getState().common.web3Instance;
    const provider = web3Instance.currentProvider;

    await provider.enable();
  };
};

export const sendSignatureRequest =
  ({ onRequestSuccess } = {}) =>
  async (dispatch, getState) => {
    console.log("check");
    const { web3Instance } = getState().common;
    const message = "Are you sure you want to connect with Dapp Music?";

    const [account, signature] = await reqAccountAndSignature(
      web3Instance,
      message
    );
    dispatch(setAccountDetails({ account, signature, message }));
    if (onRequestSuccess) {
      onRequestSuccess({ address: account, signature, message });
    }
  };

export const checkIfLoginAndUpdateState = (callback) => {
  return async (dispatch, getState) => {
    const token = JSON.parse(localStorage.getItem(STORAGES.token));

    const [web3Instance] = initProviderAndWeb3Instance({
      dispatch,
    });

    try {
      const address = await getAccount(web3Instance);

      if (checkIfLogin() && address) {
        // get user balance and dispatch it to store
        const balance = await getBalance(web3Instance, address);
        console.log({ balance });
        apiHandler(() => getUserApi(address), {
          onSuccess: (result) => {
            const user = result?.data ?? {};

            dispatch(setUserData(user));
            dispatch(
              setAccountDetails({ address, signature: "", message: "" })
            );
            dispatch(setUserBalance({ eth: balance.eth }));
            dispatch(setLogin({ isLogin: true, token, address }));
          },
          onError: (error) => {
            console.log("error", error);
          },
        });
      } else {
        logoutFromLocalStorage();
      }
    } catch (error) {
      logoutFromLocalStorage();
      console.error(error);
    } finally {
      if (callback) callback();
    }
  };
};
