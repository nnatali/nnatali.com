import React, { useRef, useEffect } from 'react';
import useCursorHandlers from '../hooks/use-cursor-handlers';
import isMobile from '../utils/is-mobile';
import isTablet from '../utils/is-tablet';
import * as styles from './About.module.sass'

function About({ children }) {
  
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const meRef = useRef(null);
  const cursorHandlers = useCursorHandlers();

  function moveCircle(){
    const section = sectionRef.current;
    const sectionPosition = section.getBoundingClientRect().top;
    let translate = (sectionPosition - section.offsetHeight);
    if (isMobile || isTablet) {
      circleRef.current.style.transform = 'translateX('+(translate * 0.6)+'px)';
    } else {
      circleRef.current.style.transform = 'translateY('+(translate)+'px)';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', moveCircle);
    return () => window.removeEventListener('scroll', moveCircle);
  }, []);
  
  return (
    <section ref={sectionRef} data-revert="true" className={styles.about} {...cursorHandlers}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          Hey there! My name is Natalí. Let’s build something together.
        </h3>
        <p className={styles.text}>
          I have 12+ years of front-end development and a serious passion for UI effects, animations and to create intuitive user experiences. I am also a proud little girl mom, and a board games enthusiast.
        </p>
        <p className={styles.text}>
          Want to get in touch? 
          <a className={styles.link} href="mailto:hola@nnatali.com" target="_blank" rel="noopener noreferrer" {...cursorHandlers}>
            <span>📬</span> 
            Drop me a line
          </a>
        </p>
        <span ref={circleRef} className={styles.aboutCircle}></span>
        <span ref={meRef} className={styles.aboutMe}></span>
      </div>
      {children}
    </section>
  )
}

export default About