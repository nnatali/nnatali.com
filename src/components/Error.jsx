import React from 'react';
import useCursorHandlers from '../hooks/use-cursor-handlers';
import {
  error,
  container,
  title,
  text,
  link
} from './Error.module.sass';

function About({ children }) {
  
  const cursorHandlers = useCursorHandlers();

  return (
    <section data-revert="true" className={error} {...cursorHandlers}>
      <div className={container}>
        <h3 className={title}>
          Ouch! Page not found
        </h3>
        <p className={text}>
          Sorry, but you can go to 
          <a className={link} href="/" {...cursorHandlers}>home.</a>
        </p>
      </div>
      {children}
    </section>
  )
}

export default About;