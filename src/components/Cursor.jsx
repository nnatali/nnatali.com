import React, { useContext, useState, useEffect } from 'react';
import isMobile from '../utils/is-mobile';
import useMousePosition from '../hooks/use-mouse-position';
import { CursorContext } from '../contexts/cursor-context-provider';
import * as styles from './Cursor.module.sass';

function Cursor() {
  
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  if (isMobile) {
    return null;
  }
  
  let cursorClass = styles.cursor;
  if (cursor.active) {
    cursorClass += ' '+styles.active;
  }
  if (cursor.revert) {
    cursorClass += ' '+styles.revert;
  }

  return (
    <div 
      className={cursorClass}
      style={{ 
        left: clientX,
        top: clientY,
        display: isVisible && clientX > 1 ? 'block' : 'none'
      }}
    />
  );
}

export default Cursor;