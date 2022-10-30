import React from "react";
import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const visibility = () => {
    setIsVisible(!isVisible);
  };

  const submit = (data) => {
    sessionStorage.setItem("username", username);
    navigate("/tasks");
  };

  return (
    <div className="login-bg">
      <h2>My Account</h2>
      <p>Enter your username and password to continue</p>
      <div className="login-container">
      
        <form className="form-login" onSubmit={submit}>
          <div className="input-container">
            <input
              required
              value={username}
              placeholder="Username"
              type="text"
              id="username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <div className="passwordContainer">
              <input
                required
                placeholder="Password"
                type={isVisible ? "text" : "password"}
                id="password"
              />
              {isVisible ? (
                <i onClick={visibility} className="fa-regular fa-eye-slash"></i>
              ) : (
                <i onClick={visibility} className="fa-regular fa-eye"></i>
              )}
            </div>
          </div>
          <button>Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
