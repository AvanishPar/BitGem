import React from "react";

import { Navigate } from "react-router-dom";
// import { checkIfLogin } from "../common/common";
import Routes from "../constants/routes";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const { isLogin } = useSelector((state) => state.login);

  // console.log(isLogin, "isLogin");
  // console.log(checkIfLogin(), "checkIfLogin");

  if (isLogin) {
    return <>{children}</>;
  } else {
    return <Navigate replace to={Routes.home} />;
  }
}

export default PrivateRoute;
