import React, { useRef, useEffect } from 'react';
import useCursorHandlers from '../hooks/use-cursor-handlers';
import isMobile from '../utils/is-mobile';
import isTablet from '../utils/is-tablet';
import * as styles from './About.module.sass';

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
          Hey there! My name is Natalí.
        </h3>
        <p className={styles.text}>
          I have 12+ years of front-end development and a serious passion for UI effects, animations and to create intuitive user experiences. I am also a proud little girl mom and a board games enthusiast.
        </p>
        <p className={styles.text}>
          Sometimes
          <a className={styles.link} href="https://twitter.com/nnatali" target="_blank" rel="noopener noreferrer" {...cursorHandlers}>I tweet,</a>
          <a className={styles.link} href="https://instagram.com/nnatali" target="_blank" rel="noopener noreferrer" {...cursorHandlers}>upload photos</a>
          and time ago 
          <a className={styles.link} href="https://nnatali.com/blog-personal/" {...cursorHandlers}>wrote a blog.</a>
        </p>
        <p className={styles.text}>
          In 
          <a className={styles.link} href="https://www.linkedin.com/in/nnatali/" target="_blank" rel="noopener noreferrer" {...cursorHandlers}>linkedin</a>
          you can view my professional career and below some examples of my work.
        </p>
        <h4 className={styles.subtitle}>Want let's build something together?
          <a className={styles.link} href="mailto:hola@nnatali.com" target="_blank" rel="noopener noreferrer" {...cursorHandlers}>
            Drop me a line.
          </a>
        </h4>
        <span ref={circleRef} className={styles.aboutCircle}></span>
        <span ref={meRef} className={styles.aboutMe}></span>
      </div>
      {children}
    </section>
  )
}

export default About;