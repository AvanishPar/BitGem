import Web3 from "web3";
import getConfig from "../../configs/config";
import {
  setProvider,
  setWeb3Instance,
} from "../../store/commonStore/actionCreator";

export const reqAccountAndSignature = async (web3Instance, msg) => {
  // let accounts;
  // let signature;

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  const signature = await window.ethereum.request({
    // method: "eth_personalSign",
    method: "personal_sign",
    params: [web3Instance.utils.utf8ToHex(msg), accounts[0]],
  });

  return [accounts[0], signature];
};

export const createWeb3Instance = () =>
  new Web3(Web3.givenProvider || getConfig().web3ProviderFallbackUrl);

export const parseBalance = (num) => parseFloat((num / 10 ** 18).toFixed(4));

const getEthereumBalance = async (web3Instance, account) => {
  const ethBalance = await web3Instance.eth.getBalance(account);
  return parseBalance(ethBalance);
};

export const hexToNumber = (hex) => Web3.utils.hexToNumber(hex);

export const getBalance = async (web3Instance, account) => {
  const balances = {};

  balances.eth = await getEthereumBalance(web3Instance, account);

  return balances;
};

export const createProvider = () => {
  try {
    return Web3.givenProvider;
  } catch (error) {
    console.error("error", error);
    return null;
  }
};

export const initProviderAndWeb3Instance = ({ dispatch }) => {
  const provider = createProvider();
  const web3Instance = createWeb3Instance();
  console.log({ provider, web3Instance });
  dispatch(setWeb3Instance(web3Instance));
  dispatch(setProvider(provider));
  return [web3Instance, provider];
};

export const getAccount = async (web3Instance) => {
  try {
    const account = await web3Instance.eth.getAccounts();
    return account[0];
  } catch (error) {
    console.error(error);
    return "";
  }
};

export const getChainId = async (web3Instance) =>
  await web3Instance.eth.net.getId();
