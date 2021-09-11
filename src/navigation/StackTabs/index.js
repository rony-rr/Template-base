import React, { useState, } from "react";

import MainStack from "./MainStack";

const AppNavigator = () => {
  const [redirect, setRedirect] = useState("Test");

  return <MainStack redirect={redirect} />;
};

export default AppNavigator;
