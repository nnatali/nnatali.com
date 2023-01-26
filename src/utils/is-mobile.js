const isMobile = 
  typeof window !== 'undefined' ? (window.innerWidth < 600) ? true : false : null;

export default isMobile;