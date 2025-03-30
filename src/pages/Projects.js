import React from 'react';
import Card from '../components/common/Card';
import projectData from '../data/projects.json'; // Import project data
import styles from './Projects.module.css'; // Create this CSS module
import { motion } from 'framer-motion';

// Animation variants from Home page or define new ones
const pageVariants = {
  initial: { opacity: 0, x: -100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 100 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const Projects = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`${styles.projectsPage} page-transition`}
    >
      <div className="container">
        <h2 className={styles.title}>My Projects</h2>
        <p className={styles.subtitle}>Here's some of the work I'm proud of.</p>

        <div className={styles.projectsGrid}>
          {projectData.map((project, index) => (
             <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <Card className={styles.projectCard} tiltEnabled={true}>
                    {/* Use aspect-ratio CSS for images if possible */}
                    <img src={project.imageUrl || 'https://via.placeholder.com/400x250'} alt={`${project.title} screenshot`} className={styles.projectImage} />
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                        <p className={styles.cardDescription}>{project.description}</p>
                        <div className={styles.tags}>
                            {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                        </div>
                        <div className={styles.links}>
                            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button">Live Demo</a>}
                            {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={`${styles.repoLink} button`}>GitHub Repo</a>}
                        </div>
                    </div>
                </Card>
             </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;