let isMobile = false;

if(typeof window !== 'undefined') {
  const screenWidth = window.innerWidth;

  if(screenWidth <= 765) isMobile = true;
}

export default isMobile;