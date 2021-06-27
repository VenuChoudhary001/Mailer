import React, {  useState } from "react";

const USER_CONTEXT = React.createContext();

export const USERPROVIDER = ({ children }) => {
  const [user, setUser] = useState({});

  const [flag, setFlag] = useState(false);
  console.log(user);
  return (
    <USER_CONTEXT.Provider value={{ setUser, setFlag, user ,flag}}>
      {children}
    </USER_CONTEXT.Provider>
  );
};

export default USER_CONTEXT;
