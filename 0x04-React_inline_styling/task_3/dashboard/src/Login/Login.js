// File: task_3/dashboard/src/Login/Login.js

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

const Login = () => {
  return (
    <div className={css(styles.login)}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <button>Login</button>
    </div>
  );
};

export default Login;
