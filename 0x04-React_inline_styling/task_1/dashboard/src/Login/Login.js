// File: task_1/dashboard/src/Login/Login.js

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  margin: {
    margin: '20px',
  },
});

const Login = () => {
  return (
    <div className={css(styles.margin)}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <br />
      <button>Login</button>
    </div>
  );
};

export default Login;
