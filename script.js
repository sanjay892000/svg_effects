let head = gsap.timeline();

head.from('header h1', {
   y: -50,
   duration: 1
})

head.from('header li', {
   y: -50,
   duration: 1,
   stagger: 0.3,
})
head.from('.page1 h1', {
   opacity: 0,
   duration: 2
})


gsap.to('.page1 h1', {
   Transform: 'translateX(-75%)',
   scrollTrigger: {
      trigger: '.page1',
      scroll: "body",
      start: "top 0",
      end: "top -200%",
      scrub: 2,
      pin: true

   }
})




let startPath = `M 10 300 Q 760 300 1520 300`;

let svg = document.querySelector(".page2 svg")
svg.addEventListener('mousemove', (point) => {
   gsap.to('svg path', {
      attr: { d: `M 10 300 Q ${point.offsetX} ${point.offsetY + 2} 1520 300` },

   })
})
svg.addEventListener('mouseleave', () => {
   gsap.to("svg path", {
      attr: { d: startPath },
      duration: 1,
      ease: "elastic.out(1,0.1)"
   })
})