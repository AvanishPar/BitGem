import {
  getUserApi,
  getUserNameApi,
  getMessageApi,
  twitterLoginApi,
  updateUserApi,
  profilePostApi,
  allPostsApi,
  validateLinkApi,
  deleteProfileApi,
  uploadProfileApi,
  metaDataApi,
  createAssetsApi,
  getAssetsbyIDApi,
  updateAssetApi,
  getAssetDetailByIdApi,
  addCommentApi,
  getSearchResultApi,
  deleteComment,
  followApi,
  unFollowApi,
} from "../../services/api";

import { toast } from "react-toastify";
// import { apiHandler } from "services/axios";
import { loginApi } from "services/loginServices";
import { setLoginState, setLoginToken } from "store/loginStore/actionCreator";
import { setUserData } from "store/userStore/actionCreators";
// import { toast } from "react-toastify";

export const setValidateUrl = (data) => {
  return {
    type: "SETVALIDATEURL",
    data,
  };
};
export const setCategory = (data) => {
  return {
    type: "SETCATEGORY",
    data,
  };
};
export const setUserDetails = (data) => {
  return {
    type: "SETUSERADDRESS",
    data,
  };
};

export const setLink = (data) => {
  return {
    type: "SETLINK",
    data,
  };
};
export const setUIDLink = (data) => {
  return {
    type: "SETUID",
    data,
  };
};

export const setAssetDetail = (data) => {
  return {
    type: "SETASSETSDETAIL",
    data,
  };
};
export const setAssetDetails = (data) => {
  return {
    type: "SETASSETSDETAILS",
    data,
  };
};
export const setUserNameAvalability = (data) => {
  return {
    type: "USERNAMEAVALABLE",
    data,
  };
};
export const setMessage = (data) => {
  return {
    type: "SETMESSAGE",
    data,
  };
};

export const setLoading = () => {
  return {
    type: "SETLOADING",
  };
};
export const unSetLoading = () => {
  return {
    type: "UNSETLOADING",
  };
};
export const setUserInfo = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};
export const setAddresses = (address1, address2) => {
  return {
    type: "SETADDRESS",
    address1,
    address2,
  };
};
export const setLoginData = (data) => {
  return {
    type: "SETLOGINDATA",
    data,
  };
};

export const setAssects = (data) => {
  return {
    type: "SETASSETS",
    data,
  };
};
export const clearData = () => {
  return {
    type: "DISCONNECT",
  };
};
export const setAssectsById = (payload) => {
  return {
    type: "ASSETSBYID",
    payload,
  };
};
// setAssectsById;
export const setSeachData = (data) => {
  return {
    type: "SETSEARCHDATA",
    data,
  };
};
export const validateLink = (url, token, category) => async (dispatch) => {
  console.log("uploadProfile action");
  dispatch(setValidateUrl(url));
  try {
    const response = await validateLinkApi(url, token, category);
    console.log(response);
    if (response.data.message) {
      toast(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (response.data.Location) {
      toast("Link Verified Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    console.log(response);
    dispatch(setLink(response.data));
    // if (response.data.message) {
    //   toast(response.data.message, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // }

    if (response.status == "success") {
    } else {
      // toast.error(response.Message);
    }
  } catch (e) {
    console.log(e);
    toast(e, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
export const deleteProfile = (token) => async (dispatch) => {
  console.log("uploadProfile action");
  try {
    const response = await deleteProfileApi(token);
    console.log(response);
    if (response.data) {
      // toast.success(response.Message);
      dispatch(setUserInfo(response.data.data));
    } else {
      // toast.error(response.Message);
    }
  } catch (e) {
    console.log(e);
  }
};
export const uploadProfile = (data, token) => async (dispatch) => {
  console.log("uploadProfile action");
  try {
    const response = await uploadProfileApi(data, token);
    console.log(response);
    if (response.data) {
      // toast.success(response.Message);
      dispatch(setUserInfo(response.data.data));
    } else {
      // toast.error(response.Message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const createAssets = (data, token, UID) => async (dispatch) => {
  try {
    const response = await createAssetsApi(data, token, UID);
    console.log(response);
    if (response.data.asset) {
      toast("Asset Create Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // toast.success(response.Message);
      dispatch(setAssetDetails(response.data));
    } else {
      // toast.error(response.Message);
    }
  } catch (e) {
    console.log(e);
  }
};
export const updateUser = (data, token) => async (dispatch) => {
  try {
    const response = await updateUserApi(data, token);
    if (response.data) {
      dispatch(setUserInfo(response.data));
      toast("Profile updated successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // toast.error(response.Message);
    }
  } catch (e) {
    console.log(e);
  }
};
export const updateAsset = (data, token, Id) => async (dispatch) => {
  try {
    const response = await updateAssetApi(data, token, Id);
    if (response) {
      dispatch(unSetLoading());
      window.location.replace("https://staging.soshnft.io/");
    }
  } catch (e) {
    console.log(e);
  }
};
export const getAssetsbyID = (id) => async (dispatch) => {
  try {
    const response = await getAssetsbyIDApi(id);
    if (response?.data) {
      dispatch(setAssectsById(response.data));
    }
  } catch (e) {
    console.log(e);
  }
};
export const profilePost = (token) => async (dispatch) => {
  try {
    const response = await profilePostApi(token);
    console.log(response.data, "home page data");
    if (response?.data) {
      dispatch(setAssects(response.data));
    }
  } catch (e) {
    console.log(e);
  }
};
export const allPosts = (token) => async (dispatch) => {
  try {
    const response = await allPostsApi(token);
    console.log(response);
    if (response.status == "success") {
      // toast.success(response.Message);
      // dispatch(setUserDetails(response));
    } else {
      // toast.error(response.Message);
    }
  } catch (e) {
    console.log(e);
  }
};
export const twitterLogin = (token) => async (dispatch) => {
  try {
    const response = await twitterLoginApi(token);
    console.log(response);
    if (response.status == "success") {
      // toast.success(response.Message);
      // dispatch(setUserDetails(response));
    } else {
      // toast.error(response.Message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const metaData = (buccket_link, token) => async (dispatch) => {
  try {
    const response = await metaDataApi(buccket_link, token);
    console.log(response);
    dispatch(setUIDLink(response.data));
    // toast("Content uploaded on IPFS successfully", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
  } catch (e) {
    console.log(e);
  }
};
export const commentDelete = (commentId, token) => async (dispatch) => {
  console.log(commentId, token);
  try {
    const response = await deleteComment(commentId, token);
    console.log(response);
    if (response.status == "success") {
      toast.error("Comment Deleted");
      // dispatch(setUserDetails(response));
    }
    if (response.status == "error") {
      // toast.success(response.Message);
      // dispatch(setUserDetails(response));
    } else {
      // toast.error(response.Message);
    }
  } catch (e) {
    console.log(e);
  }
};
export const getUserByWalletAddres = (data) => async (dispatch) => {
  try {
    const response = await getUserApi(data);
    console.log(response);
    if (response.status == "success") {
      // toast.success(response.Message);
      dispatch(setUserDetails(response));
    }
    if (response.status == "error") {
      // toast.success(response.Message);
      dispatch(setUserDetails(response));
    } else {
      // toast.error(response.Message);
    }
  } catch (e) {
    console.log(e);
  }
};
export const getMessage = (data) => async (dispatch) => {
  try {
    const response = await getMessageApi(data);
    console.log(response);
    if (response.status == "success") {
      // toast.success(response.Message);
      dispatch(setMessage(response.data.signinmessage));
    } else {
      // toast.error(response.Message);
    }
  } catch (e) {
    console.log(e);
  }
};
export const login =
  (username, name, signature, message, address) => async (dispatch) => {
    try {
      const response = await loginApi(
        username,
        name,
        signature,
        message,
        address
      );

      console.log(response, "login data");
      if (response.data.status == "success") {
        dispatch(setLoginData(response));
      }
      if (response.status == "input_error") {
        toast.error(response.message);
      } else {
        // toast.error(response.Message);
      }
    } catch (e) {
      console.log(e);
    }
  };
export const checkusername = (data) => async (dispatch) => {
  try {
    const response = await getUserNameApi(data);
    console.log(response);
    if (response.status == "error") {
      // toast.success(response.Message);
      dispatch(setUserNameAvalability(response));
    } else {
      // toast.error(response.Message);
    }
  } catch (e) {
    console.log(e);
  }
};
export const getAssetDetailById = (id) => async (dispatch) => {
  try {
    const response = await getAssetDetailByIdApi(id);
    if (response.data) {
      dispatch(setAssetDetail(response.data));
      console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getSearchResult = (search, type) => async (dispatch) => {
  try {
    const response = await getSearchResultApi(search, type);
    console.log(response);
    if (response.result) {
      dispatch(setSeachData(response.result));
      console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
};
export const addComment = (id, text, token) => async (dispatch) => {
  try {
    const response = await addCommentApi(id, text, token);
    if (response.result) {
      dispatch(setSeachData(response.result));
      console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
};

export const follow = (id, token) => async (dispatch) => {
  try {
    const response = await followApi(id, token);
    if (response.result) {
      // dispatch(setSeachData(response.result));
      // console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
};

export const unFollow = (id, token) => async (dispatch) => {
  try {
    const response = await unFollowApi(id, token);
    if (response.result) {
      // dispatch(setSeachData(response.result));
      // console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
};
