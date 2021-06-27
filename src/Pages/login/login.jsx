import React, { useContext, useState } from "react";
import login from "../../assests/login.png";
import USER_CONTEXT from "../../context/user-context";
import "../../styles/loginpage.css";
import Redirect from "./loginredirect";
import { Link, useHistory } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import ReactDOM from 'react-dom';

const Login = () => {
  const { setUser,  user } = useContext(USER_CONTEXT);
  let history = useHistory();
  const registerUser = async () => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.userName,
        password: user.password,
      }),
    };
    let response = await fetch(
      "https://flash-mailer-backend.herokuapp.com/api/register",
      requestOptions
    );
    let result = await response.json();
    console.log(result);
    
    setUser({ ...user, ...result });
    history.push("/home");
  };
  const Submit = (e) => {
    e.preventDefault();

    if (user.userName && user.password.length >= 6) {
      registerUser();
    } else {
      alert(user.errors[0].msg);
      setUser({ ...user, errors: null });
    }
  };
  const responseGoogle = (response) => {
 console.log(response);
//  window.location.href = '/home';
}


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
          <h2>Get Started</h2>
          <div
            className=""
            style={{
              display: "flex",
              marginTop: "0px",
              justifyContent: "center",
            }}
          >
            <h4>Already have an account?</h4>
            <h4
              style={{
                color: "var(--primary-color)",
                marginLeft: "4px",
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = "/redirect")}
            >
              Sign in
            </h4>
          </div>
          <div className="logindetails">
            <form>
              <div className="column">
                <label htmlFor="name" className="form-label">
                  Enter your name
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
                CREATE ACCOUNT
              </button>
              <h4>
                <span>or</span>
              </h4>
              {/* <button type="submit" className="btn-success">
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
              <GoogleLogin
    clientId="652180116893-lrdm5i34pvgtf3pud4rkjeghmcf0vthm.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
