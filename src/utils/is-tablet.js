const isTablet = 
  typeof window !== 'undefined' ? (window.innerWidth < 1000) ? true : false : null

export default isTablet