import React, { useState, useEffect } from "react";

const MAIL_CONTEXT = React.createContext();

export const PROVIDER = ({ children }) => {
  //To show new mail component
  const [show, setShow] = useState(false);
  //List of all mails
  const [allMail, setAllMail] = useState();
  //NewMail
  const [newMail, setNewMail] = useState();
  //Ready to send
  const [sendMail, setSendMail] = useState(false);
  //View particular mail on Click
  const [viewMail, setViewMail] = useState();
  const getData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let result = await response.json();
    console.log(result);
    setAllMail(result);
  };
  useEffect(() => {
    getData();
  }, [sendMail]);
  console.log(newMail);
  return (
    <MAIL_CONTEXT.Provider
      value={{
        show,
        setShow,
        newMail,
        setNewMail,
        allMail,
        viewMail,
        setViewMail,
        setSendMail,
        allMail,
        setAllMail,
      }}
    >
      {children}
    </MAIL_CONTEXT.Provider>
  );
};

export default MAIL_CONTEXT;
