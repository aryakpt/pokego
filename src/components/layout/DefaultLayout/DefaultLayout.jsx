import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './DefaultLayout.module.css';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default DefaultLayout;
