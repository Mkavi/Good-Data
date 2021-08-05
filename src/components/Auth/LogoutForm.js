import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import CustomLoading from "../CustomLoading";

const LogoutForm = ({ logout }) => {
  const history = useHistory();
  useEffect(
    () => {
      logout().then(() => history.push("/login"));
    },
    // only call the logout on initial mount -> the empty array is correct here
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return <CustomLoading label="Logging you out..." />;
};

export default LogoutForm;
