// File: task_1/dashboard/src/Header/Header.js

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  logo: {
    width: '100px',
    margin: '10px',
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
});

const Header = () => {
  return (
    <header className={css(styles.header)}>
      <img src="/logo.png" alt="Logo" className={css(styles.logo)} />
      <h1>My App</h1>
    </header>
  );
};

export default Header;
