import axios from "axios";
import { toast } from "react-toastify";
var FormData = require("form-data");

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
const URL = "http://localhost:5000/api";

export const getUserNameApi = (userName) => {
  console.log(userName, "userName");
  var config = {
    method: "get",
    url: URL + `/V1/user/checkusername?username=${userName}`,
    headers: {},
  };
  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const twitterLoginApi = (token) => {
  var config = {
    method: "get",
    url: URL + `/V1/social/twitter/login?auth_token=${token}`,
    headers: {
      Cookie:
        "connect.sid=s%3Am9p_6q4c-avYfeY1jW42U3T0h-cq8Yz2.MAN2vqq8dqH03%2BUPG92e%2FcTc8LpScl%2BcCJNCq6T7TuE",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const updateUserApi = (data, token) => {
  var data = JSON.stringify({
    name: data.name,
    username: data.username,
    bio: data.bio,
    email: data.privateEmail,
  });

  var config = {
    method: "post",
    url: URL + "/V1/user/updateUser",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const allPostsApi = (data, token) => {
  var config = {
    method: "get",
    url: URL + "/V1/assets/owner/61e3e1bb69282c675bd499e8",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  var axios = require("axios");

  var config = {
    method: "get",
    url: URL + "/V1/assets?platform_type=TWITTER",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const profilePostApi = (data, token) => {
  var config = {
    method: "get",
    url: URL + "/V1/assets?platform_type=TWITTER",
    headers: {},
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // return error;
      console.log(error);
    });
};

export const getAssetsbyIDApi = (ID) => {
  var config = {
    method: "get",
    url: URL + `/V1/assets/owner/${ID}`,
    headers: {},
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // return error;
      console.log(error);
    });
};
export const uploadProfileApi = (img, token) => {
  console.log("uploadProfileApi");
  var data = new FormData();
  data.append("image", img);

  var config = {
    method: "post",
    url: URL + "/V1/user/updateprofileimage",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const deleteProfileApi = (token) => {
  var config = {
    method: "post",
    url: URL + "/V1/user/removeprofileimage",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios(config)
    .then(function (response) {
      return response;
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const validateLinkApi = (url, token, category) => {
  var data = JSON.stringify({
    link: url,
  });

  var config = {
    method: "post",
    url: URL + `/V1/social/${category}/validatelink`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      // console.log(response, "responseresponseresponse");
      // toast(response.data.message, {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      console.log(response, "respone api");
      return response;
    })
    .catch(function (error) {
      console.log(error.Error, "error");
      return error;
    });
};

export const getMessageApi = (userName) => {
  var config = {
    method: "get",
    url: URL + `/V1/auth/message`,
    headers: {},
  };
  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getUserApi = (address) => {
  const add = address.toLowerCase();
  var config = {
    method: "get",
    url: URL + `/V1/user/getUserByWalletAddress/${add}`,
    headers: {},
  };
  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const createAssetsApi = (data, token, uid) => {
  console.log(uid.bucket_link.ETag, "Etag");
  var data = JSON.stringify({
    hashtag: data.hashtag,
    awsObjectId: uid.bucket_link.ETag,
    post_url: uid.Validate_URL,
    platform_type: data.category,
    description: data.caption,
    metadata_url: "https://ipfs.io/ipfs/" + uid.CID.cid,
    name: data.title,
  });

  var config = {
    method: "post",
    url: URL + "/V1/assets",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const metaDataApi = (url, token) => {
  var data = JSON.stringify({
    metadata: {
      name: "Kuch bhi",
      description: "kuch bhi",
      image: url,
    },
  });

  var config = {
    method: "post",
    url: URL + "/V1/ipfs/uploadmetadata",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      return response;
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const updateAssetApi = (data, token, Id) => {
  var data = data;

  var config = {
    method: "put",
    url: URL + `/V1/assets/${Id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: { tx_data: data },
  };

  return axios(config)
    .then(function (response) {
      return response;
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const getAssetDetailByIdApi = (id) => {
  var config = {
    method: "get",
    url: URL + `/V1/assets/${id}`,
    headers: {},
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const getSearchResultApi = (search, searchType, platform) => {
  var config = {
    method: "get",
    url:
      URL +
      `/V1/assets/searchAssets/search?search=${search}&searchType=${searchType}&platform=${platform}`,
    headers: {},
  };
  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const addCommentApi = (assetId, text, token) => {
  console.log(assetId, text, token);
  var data = JSON.stringify({
    text: text,
  });
  var config = {
    method: "post",
    url: URL + `/V1/assets/${assetId}/comments`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteComment = (commentId, token) => {
  var config = {
    method: "delete",
    url: URL + `/V1/assets/deleteComment/${commentId}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    // data: data,
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const likeComment = (commentId, like, token) => {
  var data = JSON.stringify({
    link: like,
  });
  var config = {
    method: "post",
    url: URL + `/V1/user/${commentId}/comments/like`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const followApi = (id, token) => {
  var config = {
    method: "post",
    url: URL + `/V1/user/follow/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const unFollowApi = (id, token) => {
  var config = {
    method: "post",
    url: URL + `/V1/user/unfollow/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
