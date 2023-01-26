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
  
  return (
    <div 
      className={styles.cursor}
      style={{ 
        left: clientX,
        top: clientY,
        width: cursor.active ? '50px' : '15px',
        height: cursor.active ? '50px' : '15px',
        display: isVisible && clientX > 1 ? 'block' : 'none',
        opacity: cursor.active ? '0.5' : '1',
        background: cursor.revert ? '#0282CC' : '#C5D86D',
      }}
    />
  );
}

export default Cursor;