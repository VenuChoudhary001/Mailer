import React, { useState, useEffect, useContext } from "react";
import USER_CONTEXT from "./user-context";

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

  // const [flag,setFlag]=useState(false)


  const { user } = useContext(USER_CONTEXT);

 
  useEffect(() => {
    

      // getData();
      console.log("use effetc");
  }, []);
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
        // setFlag
      }}
    >
      {children}
    </MAIL_CONTEXT.Provider>
  );
};

export default MAIL_CONTEXT;
