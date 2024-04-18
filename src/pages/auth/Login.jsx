import React from "react";
import Form from "./components/Form";

const Login = () => {
  const handleLogin = (data) => {
    console.log(data, "Inside handle login ");
  };

  return <Form type="Login" onSubmit={handleLogin} />;
};

export default Login;
