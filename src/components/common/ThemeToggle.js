import React from 'react';
import useTheme from '../../hooks/useTheme';
import styles from './ThemeToggle.module.css'; // Create this CSS module

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleButton}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'} {/* Simple emoji toggle */}
      {/* Or use SVG icons */}
    </button>
  );
};

export default ThemeToggle;