import { useContext } from "react";

import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { Context } from "../Providers/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Context);
  let location = useLocation();

  if (loading) {
    return <span className="loading loading- loading-lg flex justify-center items-center h-screen"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;