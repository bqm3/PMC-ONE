import React, { useContext, useEffect } from "react";
import TabNavigation from "./TabNavigation";
import DefaultNavigation from "./DefaultNavigation";
import { Provider, useDispatch, useSelector } from "react-redux";

export default function CheckNavigation() {
  //   const { authToken, user } = useSelector((state) => state.authReducer);
  return (
    <DefaultNavigation />
  );
}
