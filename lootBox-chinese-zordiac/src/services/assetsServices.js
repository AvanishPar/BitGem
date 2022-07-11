import { createQueryString } from "../common/common";
import getAxiosInst from "./axios";

const API_SUB_ENDPOINT = "/audio";

const API_SUB_ENDPOINT_SUGGEST = "/user/suggesteduser/getUsers";

// export const getAllPosts = ({ page = 1, limit = 12, ...queryParams } = {}) => {
//   const queryString = createQueryString({
//     ...queryParams,
//     offset: page - 1,
//     limit,
//   });

//   return getAxiosInst({ withAuth: true }).get(
//     `${API_SUB_ENDPOINT}${queryString}`
//   );
// };

// export const getAssetDetails = (id) => {
//   return getAxiosInst({ withAuth: true }).get(`${API_SUB_ENDPOINT}/${id}`);
// };

// export const getSuggestAccount = () => {
//   return getAxiosInst({ withAuth: true }).get(`${API_SUB_ENDPOINT_SUGGEST}`);
// };

// export const getAssetsByOwner = (
//   id,
//   { page = 1, limit = 12, ...queryParams } = {}
// ) => {
//   const queryString = createQueryString({
//     ...queryParams,
//     offset: page - 1,
//     limit,
//   });

//   return getAxiosInst({ withAuth: true }).get(
//     `${API_SUB_ENDPOINT}/owner/${id}${queryString}`
//   );
// };
export const searchResult = (txt) => {
  // const data = { playlistName: "yash" };
  return getAxiosInst({ withAuth: true }).get(
    `${API_SUB_ENDPOINT}/search/${txt}`
    // data
  );
};
export const createAssets = (details, transactionHash, tokenId, result) => {
  const data = new FormData();
  data.append("title", details.title);
  data.append("artist", details.artist);
  data.append("description", details.description);
  data.append("metadataHash", result.metadataHash);
  data.append("thumbnailHash", result.thumbnailHash);
  data.append("fileHash", result.fileHash);
  data.append("transactionHash", transactionHash);
  data.append("tokenId", tokenId);

  return getAxiosInst({ withAuth: true }).post(
    `${API_SUB_ENDPOINT}/upload`,
    data
  );
};
export const isUploaded = (details) => {
  const data = new FormData();
  data.append("title", details.title);
  data.append("artist", details.artist);
  data.append("description", details.description);
  data.append("audio", details.song);
  data.append("thumbnail", details.imgFile);
  return getAxiosInst({ withAuth: true }).post(
    `${API_SUB_ENDPOINT}/isUploaded`,
    data
  );
};
// export const updateAssets = (transactionHash, cid) => {
//   const data = {
//     transactionHash: transactionHash,
//     cid: cid,
//   };
//   return getAxiosInst({ withAuth: true }).post(
//     `${API_SUB_ENDPOINT}/updateTxHash`,
//     data
//   );
// };
