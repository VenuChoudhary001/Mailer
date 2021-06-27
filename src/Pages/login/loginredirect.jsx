import React, { useState, } from "react";
import login from "../../assests/login.png";
// import google from "../assests/google-logo.png";
import "../../styles/loginpage.css";

const LoginRedirect = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    if (!name || !pass) {
      alert("name or password cannot be blank");
    } else {
      // window.location.href = "/home";
      // props.addTodo(title, desc);
      // POST request using fetch inside useEffect React hook
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name, password: pass }),
      };

      fetch(
        "https://flash-mailer-backend.herokuapp.com/api/login",
        requestOptions
      ).then((response) => response.json());

      // .then((response) => setName({  }));

      setName("");
      setPass("");
    }
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
          >
          </div>
          <div className="logindetails">
            <form>
              <div className="column">
                <label htmlFor="name" className="form-label">
                  Enter Username
                </label>
                <input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                />
              </div>
              <div className="column">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
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