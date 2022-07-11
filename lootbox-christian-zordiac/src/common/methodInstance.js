import Web3 from "web3";
import { CUSTOM_TOKEN_ADDRESS_721, CUSTOM_TOKEN_ABI_721 } from "./config721";
export function contactInstance() {
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  return new web3.eth.Contract(CUSTOM_TOKEN_ABI_721, CUSTOM_TOKEN_ADDRESS_721);
}
