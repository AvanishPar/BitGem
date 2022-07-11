import {
  SUPPORTED_BLOCKCHAINS,
  SUPPORTED_ETHEREUM_NETWORKS,
  SUPPORTED_NETWORKS,
} from "../constants/appConstants";

const defaultConfig = {
  apiBaseUrl: "",
  cacheRefetchTime: 1000 * 60 * 30,
  cacheVersion: 1, // should be equal to our app version
  web3ProviderFallbackUrl: "http://localhost:8545",
  currentChainId:
    SUPPORTED_NETWORKS[SUPPORTED_BLOCKCHAINS.ethereum][
      SUPPORTED_ETHEREUM_NETWORKS.rinkeby
    ].chain_id,
};

const getConfig = () => {
  const config = {
    ...defaultConfig,
    ...(window.__CONFIG__ || {}),
  };
  return config;
};

export default getConfig;
