import { useState } from "react";
import Login from "../components/login/index";
import SignUp from "../components/singUp.jsx/index";
import { Button } from "@mui/material";

export default function Auth(props) {
  const [isLoadingMode, setIsLoadingMode] = useState(true);
  const [formData, setData] = useState({});

  const handleToggle = () => {
    setIsLoadingMode(!isLoadingMode);
  };
  const changeHandler = (e) => {
    setData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target);
    props.setUser({ ...formData });

    //! delete values of inputs

    const formValues = Object.values(e.target);

    formValues.forEach((form) => {
      if (form.term) {
        console.log("hiii");
      }
      form.value = "";
    });
  };

  return (
    <div className="loginContainer">
      <Button onClick={handleToggle}>Click toggle</Button>
      {isLoadingMode ? (
        <Login changeHandler={changeHandler} handleSubmit={handleSubmit} />
      ) : (
        <SignUp changeHandler={changeHandler} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
