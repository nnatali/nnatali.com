import { useContext, useCallback } from 'react';
import isMobile from '../utils/is-mobile';
import { CursorContext } from '../contexts/cursor-context-provider';

function useCursorHandlers(options = {}) {
  
  const [, setCursor] = useContext(CursorContext);
  let active, revert, parent;

  const onMouseEnter = useCallback(event => {
    if (options.onMouseEnter) {
      options.onMouseEnter(event);
    }
    if (event.target.closest('section')){
      parent = event.target.closest('section');
    } else if (event.target.closest('header')){
      parent = event.target.closest('header')
    }
    const parentRevert = parent.getAttribute('data-revert');
    if (parentRevert) {
      revert = true;
    }
    if (event.target.href) {
      active = true;
    }
    setCursor(() => ({ active: active, revert: revert }));
  });
  
  const onMouseLeave = useCallback(event => {
    if (options.onMouseLeave) {
      options.onMouseLeave(event);
    }
    if (event.target.closest('section')){
      parent = event.target.closest('section');
    } else if (event.target.closest('header')){
      parent = event.target.closest('header')
    }
    const parentRevert = parent.getAttribute('data-revert');
    if (parentRevert) {
      revert = true;
    }
    if (event.target.href) {
      active = false;
    }
    setCursor(() => ({ active: active, revert: revert }));
  });

  if (isMobile) {
    return options;
  }

  return { onMouseEnter, onMouseLeave };
}

export default useCursorHandlers