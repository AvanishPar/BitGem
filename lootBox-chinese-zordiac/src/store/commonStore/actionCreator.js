import { SET_WINNER } from "./actionTypes";

export const setWinner = (data) => {
  return {
    type: SET_WINNER,
    payload: data,
  };
};
