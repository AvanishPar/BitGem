import getAxiosInst from "./axios";

const API_SUB_ENDPOINT = "/users";

export const getUserApi = (address) => {
  const add = address.toLowerCase();

  return getAxiosInst().get(`${API_SUB_ENDPOINT}/user/${add}`);
};
export const updateUser = (info) => {
  // const add = address.toLowerCase();
  console.log("api");
  // const data = {
  //   name: info.name,
  //   bio: info.bio,
  //   email: info.email,
  // };
  const data = new FormData();
  // data.append("signature", signature);
  // data.append("message", message);
  data.append("bio", info.bio);
  data.append("name", info.name);
  data.append("email", info.email);
  data.append("profile", info.profile);

  return getAxiosInst({ withAuth: true }).put(
    `${API_SUB_ENDPOINT}/updateUser`,
    data
  );
};

export const getHistory = () => {
  return getAxiosInst({ withAuth: true }).get(`${API_SUB_ENDPOINT}/history`);
};
export const getUserNameApi = (userName) => {
  console.log(userName, "userName");
  return getAxiosInst().get(
    `${API_SUB_ENDPOINT}/checkusername?username=${userName}`
  );
};
export const getUserById = (id) => {
  // console.log(userName, "userName");
  return getAxiosInst({ withAuth: true }).get(`${API_SUB_ENDPOINT}/${id}`);
};
export const getFavorite = (id) => {
  return getAxiosInst({ withAuth: true }).get(`${API_SUB_ENDPOINT}/favourites`);
};
