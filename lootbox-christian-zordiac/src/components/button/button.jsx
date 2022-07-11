import React, { useState } from "react";
import {ConnectButton} from './style'
import Web3 from "web3";
import { Toaster } from "../../common/toaster";

function ButtonComponent(){
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const [address, setAddress] = useState("");
    const handleConnect = () => {
        web3.eth
        .requestAccounts()
        .then((resp) => {
          setAddress(resp);
        })
        .catch(function (e) {
          Toaster(e.message)
        });
        if (address !== "") {
          web3.eth
            .requestAccounts()
            .then((resp) => {
              setAddress(resp);
            })
            .catch(function (e) {
              console.log(e.message);
              alert(e.message);
            });
        }
        console.log(address);
      };
    return(
        <ConnectButton>
        <button className="connect-btn" onClick={handleConnect}>Connect</button>
        </ConnectButton>
    )
}
export default ButtonComponent