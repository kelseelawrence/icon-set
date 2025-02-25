// ✅ gsap loaded? 
console.log( gsap );


// left icon
gsap.to("#download .arrow-left" , {
    ease: 'bounce.out',
    y: 4,
    duration: 2,
    yoyo: 'true',
    repeat: -1
})

gsap.to("#download .arrow-right" , {
    ease: 'bounce.out',
    y: 4,
    duration: 2,
    yoyo: 'true', 
    repeat: -1
})


// middle icon
 gsap.to('#clicker .arrow', {
   y:-10,
   ease: 'bounce',
   duration: 2,
   repeat: -1,
 })

let text = document.querySelector("#click");

 let animations = [
   
    gsap.to('#click .left', {
   y: 2,
   ease: 'bounce',
   paused: true
 }),

    gsap.to('#click .left-middle', {
   y: 2,
   ease: 'bounce',
   paused: true
 }),

    gsap.to('#click .right-middle', {
   y: -2,
   ease: 'bounce',
   paused: true
 }),

    gsap.to('#click .right', {
   y: -2,
   ease: 'bounce',
   paused: true
 })
];

text.addEventListener("mouseenter", () => {
  animations.forEach(anim => anim.play());
});

text.addEventListener("mouseleave", () => {
  animations.forEach(anim => anim.reverse());
});

// right icon

gsap.to("#upload .arrow" , {
    y: -5,
    ease: 'bounce',
    duration: 2,
    repeat: -1,
    yoyo: 'true'
})


