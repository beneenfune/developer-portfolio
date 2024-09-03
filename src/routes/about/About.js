import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.section}>
            <div className="about-container">
                <h2>About Page</h2>
                <p>
                    Welcome to our website! We are dedicated to providing you with the best experience possible.
                    Our team is passionate about delivering high-quality services and building strong relationships
                    with our clients. We believe in transparency, commitment, and excellence in everything we do.
                </p>
                <p>
                    If you have any questions or need further information, feel free to reach out to us. Thank you for
                    visiting our site, and we hope you enjoy exploring what we have to offer.
                </p>
            </div>
        </section>
    );
};

export default About;
