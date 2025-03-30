import React from 'react';
import styles from './Footer.module.css'; // Create this CSS module

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container text-center">
        {/* Add Social Links Here */}
        <div className={styles.socialLinks}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {/* Add other links */}
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;