import React from 'react';
import styles from './About.module.css'; // Create this CSS module
import { motion } from 'framer-motion';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.9 },
};

const pageTransition = {
  type: 'spring',
  stiffness: 100,
  duration: 0.5,
};

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`${styles.aboutPage} page-transition`}
    >
      <div className="container">
        <h2 className={styles.title}>About Me</h2>

        <motion.section
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className={styles.section}
        >
          <img src="/images/profile.jpg" alt="Your Name" className={styles.profilePic} /> {/* Add profile pic to public/images */}
          <p>
            Hello! I'm [Your Name], a multifaceted individual exploring the intersections of finance, technology, and research.
            Currently pursuing Chartered Accountancy, I also have a deep passion for software development, particularly with
            JavaScript (React) and Python.
          </p>
          <p>
            My journey involves building responsive web applications, experimenting with data analysis, and diving into the
            fascinating world of Large Language Models (LLMs). I thrive on learning new things and applying my skills to solve
            interesting problems.
          </p>
        </motion.section>

        <motion.section
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className={styles.section}
        >
          <h3 className={styles.sectionTitle}>Skills</h3>
          <ul className={styles.skillsList}>
            <li><strong>Frontend:</strong> React, JavaScript (ES6+), HTML5, CSS3, Framer Motion, Tailwind CSS (Optional)</li>
            <li><strong>Backend (Basic):</strong> Node.js (Optional), Python (Flask/Django - Optional)</li>
            <li><strong>Programming:</strong> Python, JavaScript</li>
            <li><strong>Data Science:</strong> Pandas, NumPy, Matplotlib (Basic)</li>
            <li><strong>Finance:</strong> Chartered Accountancy Concepts (Mention specifics if comfortable)</li>
            <li><strong>Tools:</strong> Git, Docker (Optional), VS Code</li>
            <li><strong>Research:</strong> LLM Concepts & Application</li>
          </ul>
        </motion.section>

         {/* Add more sections: Experience, Education, Hobbies etc. */}

      </div>
    </motion.div>
  );
};

export default About;