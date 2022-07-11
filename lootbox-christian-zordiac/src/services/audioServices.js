import getAxiosInst from "./axios";

const API_SUB_ENDPOINT = "audio/";

export const getAllNFT = () => {
  return getAxiosInst().get(`${API_SUB_ENDPOINT}allnft`);
};
export const getTrending = () => {
  return getAxiosInst({ withAuth: true }).get(`${API_SUB_ENDPOINT}trending`);
};
export const getYourNft = () => {
  return getAxiosInst({ withAuth: true }).get(`${API_SUB_ENDPOINT}allusernft`);
};
export const getAllArtist = () => {
  return getAxiosInst().get(`${API_SUB_ENDPOINT}artist`);
};
export const getSongs = () => {
  return getAxiosInst({ withAuth: true }).get(`${API_SUB_ENDPOINT}allnft`);
};
export const getTopchart = () => {
  return getAxiosInst({ withAuth: true }).get(`${API_SUB_ENDPOINT}topchart`);
};
export const getNewRelease = () => {
  return getAxiosInst({ withAuth: true }).get(`${API_SUB_ENDPOINT}newRelease`);
};
export const getAllPlayList = () => {
  return getAxiosInst({ withAuth: true }).get(`${API_SUB_ENDPOINT}playlist`);
};

export const deletePlayList = (id) => {
  return getAxiosInst({ withAuth: true }).delete(
    `${API_SUB_ENDPOINT}/playlist/${id}`
  );
};
export const seeAllNft = (name, key) => {
  return getAxiosInst({ withAuth: true }).get(
    `${API_SUB_ENDPOINT}seeAll/${name}/${key}`
  );
};

export const likeAudio = (name, id) => {
  return getAxiosInst({ withAuth: true }).put(
    `${API_SUB_ENDPOINT}like/${name}/${id}`
  );
};

export const addHistory = (id) => {
  return getAxiosInst({ withAuth: true }).put(
    `${API_SUB_ENDPOINT}/updateViewHistory/${id}`
  );
};
export const deletePlayListSong = (playlistId, songId) => {
  return getAxiosInst({ withAuth: true }).delete(
    `${API_SUB_ENDPOINT}/playlist/${playlistId}/${songId}`
  );
};

export const getPlayList = (id) => {
  return getAxiosInst({ withAuth: true }).get(
    `${API_SUB_ENDPOINT}/playlist/${id}`
  );
};

export const addPlayList = (playlist, song) => {
  var data = {
    playlistName: playlist,
    nftid: song,
    // publicaddress: address,
  };
  return getAxiosInst({ withAuth: true }).post(
    `${API_SUB_ENDPOINT}addPlaylist`,
    data
  );
};
export const getMusicByArtistName = (artistName) => {
  return getAxiosInst().get(`${API_SUB_ENDPOINT}artist/${artistName}`);
};
export const getMusicById = (id) => {
  return getAxiosInst().get(`${API_SUB_ENDPOINT}${id}`);
};
