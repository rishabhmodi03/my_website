import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import styles from './Home.module.css'; // Create this CSS module
import { Link } from 'react-router-dom';

// Animation variants for Framer Motion
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`${styles.hero} page-transition`} // Add page-transition class if needed
    >
      <div className="container text-center">
        <motion.h1
            className={styles.title}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome! I'm Your Name
        </motion.h1>

        <div className={styles.subtitle}>
          <TypeAnimation
            sequence={[
              'Chartered Accountant Aspirant',
              2000, // Waits 2s
              'JavaScript Developer',
              2000,
              'Python Programmer',
              2000,
              'LLM Researcher',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
          />
        </div>

        <motion.p
            className={styles.description}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
          Passionate about finance, code, and cutting-edge tech. Explore my work!
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/projects" className={`${styles.ctaButton} button`}>
            View Projects
          </Link>
          <Link to="/contact" className={`${styles.ctaButton} ${styles.secondary} button`}>
            Get In Touch
          </Link>
        </motion.div>

        {/* Optional: Add subtle background animation element here */}
        {/* e.g., animated gradient, very subtle particles */}
      </div>
    </motion.div>
  );
};

export default Home;