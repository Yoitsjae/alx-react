// File: task_1/dashboard/src/App/App.js

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
    margin: 0,
    padding: 0,
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
});

const App = () => {
  return (
    <div className={css(styles.body)}>
      <h1>My App</h1>
      <footer className={css(styles.footer)}>Footer content</footer>
    </div>
  );
};

export default App;
