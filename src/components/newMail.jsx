import React, { useContext } from "react";
import { useFormik } from "formik";
import { Typography, Button, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";
import MAIL_CONTEXT from "../context/mail-context";
import { v4 as uuidv4 } from "uuid";
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
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            body: JSON.stringify({
              title: values.subject,
              body: values.content,
              userId: uuidv4(),
              to: values.to,
              from: values.from,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
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

  return (
    <>
      <div className="new-mail">
        <div className="new-mail-header">
          <Typography variant="h6">NEW MAIL</Typography>
        </div>
        <hr />
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
            <button>Bcc</button>
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
            <textarea
              rows={15}
              type="text"
              id="content"
              name="content"
              className="mx-1 my-1"
              onChange={formik.handleChange}
              value={formik.values.content}
              placeholder="Start here"
            />
          </div>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            startIcon={<SendIcon />}
          >
            SEND
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            className="mx-2"
            onClick={() => setShow(false)}
          >
            DISCARD
          </Button>
        </form>
      </div>
    </>
  );
}

export default NewMail;
