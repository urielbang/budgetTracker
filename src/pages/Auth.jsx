import { useState } from "react";
import Login from "../components/login/index";
import SignUp from "../components/singUp.jsx/index";
import { Button } from "@mui/material";
import { auth } from "../config/fireBaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoadingMode, setIsLoadingMode] = useState(true);

  //! toggle login signUp
  const handleToggle = () => {
    setIsLoadingMode(!isLoadingMode);
  };

  //!  sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentail) => {
        const user = userCredentail.user;
        console.log(user);
        const formValues = Object.values(e.target);
        e.target.terms.checked = false;
        formValues.forEach((form) => {
          form.value = "";
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  //! sign in
  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentail) => {
        const user = userCredentail.user;
        console.log(user);
        const formValues = Object.values(e.target);
        e.target.terms.checked = false;
        formValues.forEach((form) => {
          form.value = "";
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="loginContainer">
      <Button onClick={handleToggle}>
        {isLoadingMode ? "login" : "Sign Up"}
      </Button>
      {isLoadingMode ? (
        <Login
          handleSignIn={handleSignIn}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
        />
      ) : (
        <SignUp
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleSignUp={handleSignUp}
        />
      )}
    </div>
  );
}
