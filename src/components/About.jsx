import React, { useRef, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import useCursorHandlers from '../hooks/use-cursor-handlers';
import isMobile from '../utils/is-mobile';
import isTablet from '../utils/is-tablet';
import {
  about,
  container,
  title,
  text,
  link,
  subtitle,
  circle,
  me
} from './About.module.sass';

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
    <section ref={sectionRef} data-revert="true" className={about} {...cursorHandlers}>
      <div className={container}>
        <h3 className={title}>
          Hey there! My name is Natalí.
        </h3>
        <p className={text}>
          I have 12+ years of front-end development and a serious passion for UI effects, animations and intuitive user experiences.
        </p>
        <p className={text}>
          I am also a proud mom of a little girl and a board game enthusiast.
          Sometimes I enjoy 
          <a className={link} href="https://twitter.com/nnatali" target="_blank" rel="noopener noreferrer" {...cursorHandlers}>tweeting</a>
          and 
          <a className={link} href="https://instagram.com/nnatali" target="_blank" rel="noopener noreferrer" {...cursorHandlers}>uploading photos.</a>
        </p>
        <p className={text}>
          Scroll down to have a look at some examples of my work, and you can also find me on 
          <a className={link} href="https://www.linkedin.com/in/nnatali/" target="_blank" rel="noopener noreferrer" {...cursorHandlers}>linkedin!</a>
        </p>
        <h4 className={subtitle}>Let´s build something together!
          <a className={link} href="mailto:hola@nnatali.com" target="_blank" rel="noopener noreferrer" {...cursorHandlers}>
            Drop me a line.
          </a>
        </h4>
        <span ref={circleRef} className={circle}></span>
        <div ref={meRef} className={me}><StaticImage src="../images/circle-me.png" alt="It's me" /></div>
      </div>
      {children}
    </section>
  )
}

export default About;