import React, { useState } from 'react';
import styles from './Contact.module.css'; // Create this CSS module
import { motion } from 'framer-motion';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};


const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');
    const form = event.target;
    const data = new FormData(form);

    try {
        // IMPORTANT: Replace YOUR_FORMSPREE_ENDPOINT with your actual Formspree endpoint URL
        const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus('Thanks for your message! I will get back to you soon.');
            form.reset();
        } else {
            // Handle server errors (e.g., response not ok)
            const responseData = await response.json();
            if (responseData.errors) {
                setStatus(responseData.errors.map(error => error.message).join(", "));
            } else {
                setStatus('Oops! There was a problem submitting your form.');
            }
        }
    } catch (error) {
        // Handle network errors
        setStatus('Oops! There was a problem submitting your form.');
        console.error('Form submission error:', error);
    }
};


  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`${styles.contactPage} page-transition`}
    >
      <div className="container">
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Have a question or want to collaborate? Send me a message!
        </p>

        <motion.form
            onSubmit={handleSubmit}
            className={styles.contactForm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          {status && <p className={styles.statusMessage}>{status}</p>}

          <button type="submit" className="button">Send Message</button>
        </motion.form>

         <div className={styles.contactInfo}>
            <h3>Or reach me directly:</h3>
            <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
            {/* Add LinkedIn etc. */}
         </div>
      </div>
    </motion.div>
  );
};

export default Contact;