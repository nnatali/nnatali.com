import * as React from 'react';
import useCursorHandlers from '../hooks/use-cursor-handlers';
import * as styles from './Projects.module.sass';

function Projects({ children }) {
  const cursorHandlers = useCursorHandlers();
  
  return (
    <section className={styles.projects} {...cursorHandlers}>
      {children}
    </section>
  )
}

export default Projects;