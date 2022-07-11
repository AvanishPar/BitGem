import {
  RESET_ACCOOUNT_DETAILS,
  SET_ACCOUNT_DETAILS,
  SET_MUSIC,
  SET_USER_MESSAGE,
  SET_USER_INFO,
  SET_USER_SIGNATURE,
  SET_HIT,
} from "./actionTypes";

export const setMusic = (music) => {
  return {
    type: SET_MUSIC,
    payload: music,
  };
};

export const hitLike = (music) => {
  return {
    type: SET_HIT,
  };
};

export const setMusicList = (music) => {
  return {
    type: "SET_MUSIC_LIST",
    payload: music,
  };
};

export const setUserInfo = (data) => {
  return {
    type: SET_USER_INFO,
    payload: data,
  };
};

export const setUserBalance = (data) => {
  return {
    type: SET_USER_INFO,
    payload: data,
  };
};
export const setUserData = (data) => {
  return {
    type: SET_USER_INFO,
    payload: data,
  };
};
export const setAccountDetails = ({ signature, message, account } = {}) => {
  return {
    type: SET_ACCOUNT_DETAILS,
    payload: {
      signature,
      message,
      account,
    },
  };
};

export const setUserMessage = (message) => {
  return {
    type: SET_USER_MESSAGE,
    payload: message,
  };
};

export const setUserSignature = (signature) => {
  return {
    type: SET_USER_SIGNATURE,
    payload: signature,
  };
};

export const resetAccountDetails = () => {
  return {
    type: RESET_ACCOOUNT_DETAILS,
  };
};
