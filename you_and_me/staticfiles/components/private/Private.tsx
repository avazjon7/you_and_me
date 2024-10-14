import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../context/AppContextProvider";

const Private: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
  const { appState } = useContext(AppContext);
  if(!appState.isAuth) {
    return <Navigate to="/login" replace={true}/>;
  }


  return children;
};

export default Private;
