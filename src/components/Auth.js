import React from "react";
import {useDispatch } from "react-redux";
import "./Auth.css";
import { authAction } from "../store/auth";

const Auth = () => {
  
  const dispatch = useDispatch();
  function loggedInHandler(e)
  {
    e.preventDefault();
dispatch(authAction.LoggedIn())
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={loggedInHandler}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
