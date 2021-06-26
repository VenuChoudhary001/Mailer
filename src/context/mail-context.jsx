import React, { useState, useEffect } from "react";

const MAIL_CONTEXT = React.createContext();

export const PROVIDER = ({ children }) => {
  //To show new mail component
  const [show, setShow] = useState(false);
  //List of all mails
  const [allMail, setAllMail] = useState();
  //NewMail
  const [newMail, setNewMail] = useState();
  return (
    <MAIL_CONTEXT.Provider value={{ show, setShow, newMail, setNewMail }}>
      {children}
    </MAIL_CONTEXT.Provider>
  );
};

export default MAIL_CONTEXT;
