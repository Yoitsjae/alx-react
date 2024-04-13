// task_0/dashboard/src/Login/Login.js

import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <React.Fragment>
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
};

export default Login;
