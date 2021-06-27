import React, { Component, useEffect, useState } from "react";

const USER_CONTEXT = React.createContext();

export const USERPROVIDER = ({ children }) => {
  const [user, setUser] = useState({});

  const [flag, setFlag] = useState(false);
 const getData = async () => {
   console.log(user.token);
   const requestOptions = {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
       AuthTokenString: `${user.token}`,
     },
   };

   let response = await fetch(
     "https://flash-mailer-backend.herokuapp.com/api/send/mail/sent",
     requestOptions
   );
   console.log(response);
   let result = await response.json();
   console.log(result);
//    setFlag(false);
   // setAllMail(result);
 };
  useEffect(() => {
    if (user.token) {
       getData()
    }
  }, [flag]);
  console.log(user);
  return (
    <USER_CONTEXT.Provider value={{ setUser, setFlag, user }}>
      {children}
    </USER_CONTEXT.Provider>
  );
};

export default USER_CONTEXT;
