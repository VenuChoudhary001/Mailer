import React, { useContext } from "react";
import { useFormik } from "formik";
import { Typography, Button, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";
import MAIL_CONTEXT from "../context/mail-context";
function NewMail() {
  const formik = useFormik({
    initialValues: {
      to: "",
      from: "",
      subject: "",
      content: "",
    },
    onSubmit: (values) => console.log(values),
  });
  const { setShow } = useContext(MAIL_CONTEXT);
  return (
    <>
      <div className="new-mail">
        <div className="new-mail-header">
          <Typography variant="h6">NEW MAIL</Typography>
        </div>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group my-1">
            <label htmlFor="to">From:</label>
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
            <label htmlFor="to">To:</label>
            <input
              type="email"
              id="to"
              name="to"
              className="mx-1"
              onChange={formik.handleChange}
              value={formik.values.to}
              placeholder="Enter reciepient"
            />
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
