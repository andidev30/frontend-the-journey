import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ path, component }) {
  return (
    <>
      {localStorage.getItem("token") ? (
        <Route path={path} component={component} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default PrivateRoute;
