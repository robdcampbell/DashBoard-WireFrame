import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import headPic from "../../images/robHeadShot.png";
import textPic from "../../images/textIcon.png";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../Context/Reducer";
import { useStateValue } from "../Context/StateProvider";

// CREATE DEFAULT SIGN-IN WITH EXAMPLE ACCOUNT

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // sign in functionality, push user into the data layer
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img style={{ borderRadius: "50%" }} src={headPic} alt="Logo" />
        <img src={textPic} alt="Text-Logo" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
