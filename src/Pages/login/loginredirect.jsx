import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import login from "../../assests/login.png";
import USER_CONTEXT from "../../context/user-context";
// import google from "../assests/google-logo.png";
import "../../styles/loginpage.css";

const LoginRedirect = () => {
  const { user, setUser ,setFlag} = useContext(USER_CONTEXT);
  let history = useHistory();

  const loginUser = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.userName,
        password: user.password,
      }),
    };
    let response = await fetch(
      "https://flash-mailer-backend.herokuapp.com/api/login",
      requestOptions
    );

    let result = await response.json();
    setUser({ ...user, token: result.token });
    // setFlag(true)
    history.push("/home");
  };

  const Submit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <>
      <div className="login">
        <div className="image" style={{ width: "50vw", height: "100vh" }}>
          <img
            src={login}
            alt=""
            style={{ width: "100%", height: "100%", marginTop: "0px" }}
          />
          <h1>Welcome to Mailer</h1>
        </div>
        <div className="" style={{ width: "50vw", height: "100vh" }}>
          <h2>Hello Friend !!</h2>
          <div
            className=""
            style={{
              display: "flex",
              marginTop: "0px",
              justifyContent: "center",
            }}
          ></div>
          <div className="logindetails">
            <form>
              <div className="column">
                <label htmlFor="name" className="form-label">
                  Enter Username
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setUser({ ...user, userName: e.target.value })
                  }
                  id="name"
                />
              </div>
              <div className="column">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className="form-control"
                  id="password"
                />
              </div>
              <button type="submit" className="btn" onClick={Submit}>
                Login
              </button>
              {/* <h4>
                <span>or</span>
              </h4>
              <button type="submit" className="btn-success">
                <img
                  src={google}
                  style={{
                    width: "auto",
                    height: "100%",
                    marginLeft: "0px",
                    marginRight: "8px",
                  }}
                  alt=""
                />
                Login with Google
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRedirect;
