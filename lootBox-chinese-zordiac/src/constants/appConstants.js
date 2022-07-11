export const STORAGES = {
  token: "token",
  id: "id",
  theme: "theme",
};

export const SUPPORTED_THEMES = {
  light: "light",
  dark: "dark",
};

export const PalleteColorTypes = [
  "gradient",
  "primary",
  "secondary",
  "tertiary",
  "white",
  "black",
];

export const SUPPORTED_BLOCKCHAINS = {
  ethereum: "ethereum",
};

export const SUPPORTED_ETHEREUM_NETWORKS = {
  rinkeby: "rinkeby",
  mainnet: "mainnet",
};

export const SUPPORTED_NETWORKS = {
  [SUPPORTED_BLOCKCHAINS.ethereum]: {
    mainnet: {
      name: SUPPORTED_ETHEREUM_NETWORKS.mainnet,
      chain_id: 1,
    },
    rinkeby: {
      name: SUPPORTED_ETHEREUM_NETWORKS.rinkeby,
      chain_id: 4,
    },
  },
};

export const COMPONENT_SIZES = {
  X_SMALL: "x-small",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};
