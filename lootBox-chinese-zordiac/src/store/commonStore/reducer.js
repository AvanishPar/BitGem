import { getLocalStorageItem } from "../../common/helpers/localStorageHelpers";
import { STORAGES, SUPPORTED_THEMES } from "../../constants/appConstants";
import {
  SET_CHAIN_ID,
  SET_HAS_METAMASK,
  SET_PROVIDER,
  SET_SEARCH,
  SET_SHARE_VISIBILITY,
  SET_THEME,
  SET_WEB3_INSTANCE,
  SET_SEARCH_Key,
  SET_SONG_DETAILS,
  SET_WINNER,
} from "./actionTypes";

const initialCommonState = {
  web3Instance: null,
  hasMetamask: Boolean(window.web3),
  chainId: null,
  provider: null,
  shareVisibility: false,
  data: {},
  searchData: {},
  searchKey: "",
  songDetails: {},
  winner: [],
};

export const commonReducer = (state = initialCommonState, action = {}) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: [...state.winner, action.payload],
      };
    case SET_SONG_DETAILS:
      return {
        ...state,
        songDetails: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        searchData: action.payload,
      };
    case SET_SEARCH_Key:
      return {
        ...state,
        searchKey: action.payload,
      };
    case SET_CHAIN_ID:
      return {
        ...state,
        chainId: action.payload,
      };

    case SET_HAS_METAMASK:
      return {
        ...state,
        hasMetamask: action.payload,
      };

    case SET_PROVIDER:
      return {
        ...state,
        provider: action.payload,
      };

    case SET_SHARE_VISIBILITY:
      return {
        ...state,
        shareVisibility: action.payload?.visibility ?? false,
        data: action.payload?.data ?? {},
      };

    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return { ...state };
  }
};
