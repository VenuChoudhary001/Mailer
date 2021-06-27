import React, { useState, useEffect, useContext } from "react";
import USER_CONTEXT from "./user-context";

const MAIL_CONTEXT = React.createContext();

export const PROVIDER = ({ children }) => {
  //To show new mail component
  const [show, setShow] = useState(false);
  //List of all mails sent
  const [allMail, setAllMail] = useState();

  //List of all scheduled mails
  const [scheduleList,setScheduleList]=useState();

  //NewMail
  const [newMail, setNewMail] = useState();
  //Ready to send
  const [sendMail, setSendMail] = useState(false);
  //View particular mail on Click
  const [viewMail, setViewMail] = useState();

   const [history,setHistory]=useState(false);

  const { user } = useContext(USER_CONTEXT);
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
   const { allMails } = result;
   setAllMail(allMails);
 };
 
  useEffect(() => {
    
  if(user.token){

   getData();
  }
      console.log("use effetc");
  }, [user]);
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
