// ✅ gsap loaded? 
console.log( gsap );

gsap.from('.cloud', {
    y: -61,
    opacity: 0,
    delay: 1,
    ease: 'elastic',
    duration: 3,
  })