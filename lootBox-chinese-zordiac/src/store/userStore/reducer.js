import {
  RESET_ACCOOUNT_DETAILS,
  SET_ACCOUNT_DETAILS,
  SET_USER_INFO,
  SET_MUSIC,
  SET_USER_MESSAGE,
  SET_USER_SIGNATURE,
  SET_HIT,
} from "./actionTypes";

const initialUserState = {
  userData: {},
  ownerAssets: {},
  balance: {
    eth: 0,
  },
  music: [{}],
  account: "",
  signature: "",
  message: "",
  hit: 0,
};

export const userReducer = (state = initialUserState, action = {}) => {
  switch (action.type) {
    case SET_HIT:
      return {
        ...state,
        hit: state.hit + 1,
      };
    case SET_MUSIC:
      return {
        ...state,
        music: [{ fileUri: action.payload }],
      };

    case "SET_MUSIC_LIST":
      return {
        ...state,
        music: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        // userData: [...state.userData, action.payload],
        userData: action.payload,
      };

    case SET_ACCOUNT_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    case SET_USER_SIGNATURE:
      return {
        ...state,
        signature: action.payload,
      };

    case SET_USER_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case RESET_ACCOOUNT_DETAILS:
      return {
        ...state,
        signature: "",
        message: "",
        account: "",
      };

    default:
      return { ...state };
  }
};
