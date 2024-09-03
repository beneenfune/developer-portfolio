import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Home.module.css";

import About from "../about/About";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import University from "../university/University";
import Blogs from "../blogs/Blogs";
import Contact from "../contact/Contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <section id="/" className={styles.section}>
        <div className={styles.homeContainer}>
          <header className={styles.header}>
            <h1>Hi, I'm Beneen Fune</h1>
          </header>

          <main className={styles.mainContent}>
            <p>
              This is the home page of your application. Here you can add some
              introductory text or explain what your app is about.
            </p>
            <ScrollLink to="about" className={styles.linkButton}>
              Read More
            </ScrollLink>
          </main>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <About/>
      </section>

      <section id="experience" className={styles.section}>
        <Experience/>
      </section>

      <section id="projects" className={styles.section}>
        <Projects/>
      </section>

      <section id="skills" className={styles.section}>
        <Skills/>
      </section>

      <section id="university" className={styles.section}>
        <University/>
      </section>

      <section id="blogs" className={styles.section}>
        <Blogs/>
      </section>

      <section id="contact" className={styles.section}>
        <Contact/>
      </section>
    </div>
  );
};

export default Home;
