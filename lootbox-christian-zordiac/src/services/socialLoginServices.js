import getAxiosInst from "./axios";

const API_SUB_ENDPOINT = "/social";

export const twitterLoginApi = (token) => {
  return getAxiosInst({
    headers: {
      Cookie:
        "connect.sid=s%3Am9p_6q4c-avYfeY1jW42U3T0h-cq8Yz2.MAN2vqq8dqH03%2BUPG92e%2FcTc8LpScl%2BcCJNCq6T7TuE",
    },
  }).get(`${API_SUB_ENDPOINT}/twitter/login?auth_token=${token}`);
};
