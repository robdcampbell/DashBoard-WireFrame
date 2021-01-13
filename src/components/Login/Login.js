import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import headPic from "../../images/robHeadShot.png";
import textPic from "../../images/textIcon.png";

const Login = () => {
  const signIn = () => {
    // sign in functionality
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img style={{ borderRadius: "50%" }} src={headPic} alt="Logo" />
        <img src={textPic} alt="Text-Logo" />
      </div>
      <Button type="submit" onCLick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
