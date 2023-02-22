import React, { useRef, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import {
  dory,
  container,
  image,
  text
} from './Dory.module.sass';

function Dory({ children }) {
  
  return (
    <section className={dory}>
      <div className={container}>
      <StaticImage className={image} src="../images/dory.png" alt="It's Dory" />
        <p className={text}>
          “Just keep swimming. Just keep swimming, swimming, swimming. What do we do? We swim, swim.”
        </p>
      </div>
      {children}
    </section>
  )
}

export default Dory;