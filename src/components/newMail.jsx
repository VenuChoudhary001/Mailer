import React, { useContext } from "react";
import { useFormik } from "formik";
import { Typography, Button, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";
import MAIL_CONTEXT from "../context/mail-context";
import { v4 as uuidv4 } from "uuid";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import USER_CONTEXT from "../context/user-context";

function NewMail() {
  const {
    setShow,
    setSendMail,
    newMail,
    setNewMail,
    setViewMail,
    setAllMail,
    allMail,
  } = useContext(MAIL_CONTEXT);
  const {user}=useContext(USER_CONTEXT);
  const formik = useFormik({
    initialValues: {
      to: "",
      from: "",
      subject: "",
      content: "",
    },
    onSubmit: (values) => {
      setSendMail(true);
      // setNewMail({ ...values, id: uuidv4() });
      const addData = async () => {
        let addMail = await fetch(
          "https://flash-mailer-backend.herokuapp.com/api/send/mail/send",
          {
            method: "POST",
            body: JSON.stringify({
              to: values.to,
              cc: "",
              bcc: [],
              subject: values.subject,
              body: values.content,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              AuthTokenString: `${user.token}`,
            },
          }
        );
        let result = await addMail.json();
        setAllMail([...allMail, result]);
        console.log("This is from newMail", result);
      };
      addData();
      setShow(false);
      setViewMail();
    },
  });
  const options = ["20 sec", "30 sec", "weekly", "monthly", "yearly"];
  // const defaultOption = options[0];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "55vw",
          marginLeft: "45vw",
          position: "absolute",
          overlay: "scroll",
        }}
      >
        <div className="new-mail" style={{ padding: "30px" }}>
          <div className="new-mail-header">
            <Typography variant="h4">NEW MAIL</Typography>
          </div>
          {/* <hr /> */}
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group my-1">
              <Typography variant="subtitle1">FROM:</Typography>
              <input
                type="email"
                id="from"
                name="from"
                className="mx-1"
                onChange={formik.handleChange}
                value={formik.values.from}
                placeholder="Enter reciepient"
              />
            </div>
            <div className="form-group my-1">
              <Typography variant="subtitle1">TO:</Typography>

              <input
                type="email"
                id="to"
                name="to"
                className="mx-1"
                onChange={formik.handleChange}
                value={formik.values.to}
                placeholder="Enter reciepient"
              />
              <button>CC</button>
            </div>
            <div className="form-group my-2">
              <input
                type="text"
                id="subject"
                name="subject"
                className="mx-1"
                onChange={formik.handleChange}
                value={formik.values.subject}
                placeholder="Subject to your mail"
              />
            </div>
            <div className="form-group my-2">
              {/* <textarea
                rows={15}
                type="text"
                id="content"
                name="content"
                className="mx-1 my-1"
                onChange={formik.handleChange}
                value={formik.values.content}
              /> */}
              <Editor
                // editorState={editorState}

                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                placeholder="Start here"
                onChange={(e) => formik.handleChange.bind(this)}
                value={formik.values.content}
              ></Editor>
            </div>
            <div className="" style={{ display: "flex" }}>
              <Button
                variant="contained"
                type="submit"
                startIcon={<SendIcon />}
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "white",
                  margin: "10px",
                }}
              >
                SEND
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "10px" }}
                startIcon={<DeleteIcon />}
                onClick={() => setShow(false)}
              >
                DISCARD
              </Button>
              <Dropdown
                options={options}
                value="Schedule Mail"
                className="dropdown"
              ></Dropdown>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewMail;

/*

newMail{
  to:
  from:
}
*/
