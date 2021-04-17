export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  ? true
  : window.innerWidth <= 450;
