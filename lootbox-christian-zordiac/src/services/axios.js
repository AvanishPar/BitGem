import Axios from "axios";
import { getLocalStorageItem } from "../common/helpers/localStorageHelpers";
// import getConfig from "../configs/config";
import { STORAGES } from "../constants/appConstants";

let BASE_URL = "http://localhost:5000/api";
// let BASE_URL = getConfig().apiBaseUrl;

// if (process?.env?.NODE_ENV === "production") {
//   BASE_URL = getConfig().apiBaseUrl;
// }

const CancelToken = Axios.CancelToken;

export default function getAxiosInst(
  { withAuth, headers } = { withAuth: false }
) {
  const token = getLocalStorageItem(STORAGES.token);

  if (withAuth) {
    return Axios.create({
      baseURL: BASE_URL,
      headers: { Authorization: `Bearer ${token}`, ...headers },
    });
  } else {
    return Axios.create({
      baseURL: BASE_URL,
      headers: headers,
    });
  }
}

export const apiHandler = async (
  apiCall,
  { onSuccess, onError, final, onCancel } = {},
  options = { sync: false, shouldReturn: false }
) => {
  let response;
  try {
    const source = CancelToken.source();
    response = await apiCall(source);

    const data = response?.data;
    console.log({ response });
    if (response?.status === "success" || response?.status === 200) {
      if (onSuccess && options.sync) onSuccess(data, options);
      else if (onSuccess) {
        await onSuccess(data, options);
      }
      if (options.shouldReturn) return Promise.resolve(data);
    } else {
      const error = new Error("Some Error");
      error.code = response?.status;
      throw error;
    }
  } catch (error) {
    if (Axios.isCancel(error)) {
      onCancel && onCancel(error);
      console.error("Request canceled", error.message);
    } else {
      response = error.response;
      onError && onError(error, response, options);
    }
    if (options.shouldReturn) return Promise.reject({ ...error, options });
  } finally {
    final && final(options);
  }
};
