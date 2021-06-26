import React from "react";
import login from "../assests/login.png";
import google from "../assests/google-logo.png";
import "../styles/loginpage.css";

const Login = () => {
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
            <h4 style={{ color: "var(--primary-color)", marginLeft: "4px" }}>
              {" "}
              Sign in
            </h4>
          </div>
          <div className="logindetails">
            <form>
              <div className="column">
                <label htmlFor="email" className="form-label">
                  Enter your email
                </label>
                <input type="email" id="email" />
              </div>
              <div className="column">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <button type="submit" className="btn">
                Create an account
              </button>
              <h4>
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
