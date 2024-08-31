import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1>Hi, I'm Beneen Fune</h1>
      </header>
      <main className={styles.mainContent}>
        <p>This is the home page of your application. Here you can add some introductory text or explain what your app is about.</p>
        <Link to="/about" className={styles.linkButton}>
          Read More
        </Link>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 My App. All rights reserved!</p>
      </footer>
    </div>
  );
};

export default Home;
