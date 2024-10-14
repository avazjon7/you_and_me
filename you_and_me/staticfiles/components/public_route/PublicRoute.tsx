import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../../context/AppContextProvider";

const PublicRoute: React.FC = () => {
  const { appState } = useContext(AppContext);
  if(appState.isAuth) {
    return <Navigate to="/" replace={true}/>;
  }

  return <Outlet/>;
};

export default PublicRoute;
