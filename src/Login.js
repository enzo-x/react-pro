import React from "react";
import "./Login.css";
import CustButton from "./Common/CustButton";
import CustInput from "./Common/CustInput";
function Login() {
  return (
    <div className="Login">
      <h2>Login</h2>
  <CustInput name={"User name"} type={'text'}/>
  <CustInput name={"Password"} type={'password'}/>
    <CustButton label={'Login'}/> 
    </div>
  );
}

export default Login;
