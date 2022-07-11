import {
  SET_LOGIN,
  SET_LOGIN_ADDRESS,
  SET_LOGIN_STATE,
  SET_TOKEN,
} from "./actiontypes";

export const setLoginState = (state) => {
  return {
    type: SET_LOGIN_STATE,
    payload: state,
  };
};

export const setLoginToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const setLoginAddress = (address) => {
  return {
    type: SET_LOGIN_ADDRESS,
    payload: address,
  };
};

export const setLogin = (
  { isLogin, address, token } = {
    isLogin: false,
    address: "",
    token: "",
  }
) => {
  return {
    type: SET_LOGIN,
    payload: {
      isLogin,
      address,
      token,
    },
  };
};
