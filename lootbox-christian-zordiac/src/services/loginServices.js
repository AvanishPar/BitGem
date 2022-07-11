import getAxiosInst from "./axios";

const API_SUB_ENDPOINT = "/users";

export const loginApi = (username, signature, name, message, email, img) => {
  const data = new FormData();
  data.append("signature", signature);
  data.append("message", message);
  data.append("username", username);
  data.append("name", name);
  data.append("email", email);
  data.append("profile", img);
  // var data = {
  //   signature: signature,
  //   message: message,
  //   username: username,
  //   name: name,
  //   email: email,
  //   img: img,
  //   // publicaddress: address,
  // };
  return getAxiosInst().post(`${API_SUB_ENDPOINT}/login`, data);
};

export const getMessageApi = () => {
  return getAxiosInst().get(`${API_SUB_ENDPOINT}/message`);
};
