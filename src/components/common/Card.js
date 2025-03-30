import React from 'react';
import Tilt from 'react-parallax-tilt';
import styles from './Card.module.css'; // Create this CSS module

const Card = ({ children, className = '', tiltEnabled = false }) => {
  const cardContent = (
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  );

  return tiltEnabled ? (
    <Tilt
      className={styles.tiltWrapper}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={1500}
      scale={1.02}
      gyroscope={true}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="8px"
    >
      {cardContent}
    </Tilt>
  ) : (
    cardContent
  );
};

export default Card;