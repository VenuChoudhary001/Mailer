import React, { Component } from "react";

const USER_CONTEXT = React.createContext();

const PROVIDER = ({ children }) => {
  return <USER_CONTEXT>{children}</USER_CONTEXT>;
};
