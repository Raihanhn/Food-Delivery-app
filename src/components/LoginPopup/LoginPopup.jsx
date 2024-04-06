import React, { useState } from "react";
import "./loginpopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState} </h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          <input type="text" placeholder="Your name" required />
          <input type="email" name="Your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{} </button>
      </form>
    </div>
  );
};

export default LoginPopup;
