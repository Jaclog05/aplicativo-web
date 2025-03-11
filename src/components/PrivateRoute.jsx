import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const localToken = sessionStorage.getItem("appraisalToken")

  return localToken ? children : <Navigate to="/admin-login" />;
};

export default PrivateRoute;