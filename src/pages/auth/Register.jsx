import React from "react";
import Form from "./components/Form";

const Register = () => {
  const handleRegister = (data) => {
    console.log(data, "inside Handle register");

  };

  return (
    <Form type="Register" onSubmit={handleRegister} />
  ) 
};

export default Register;
