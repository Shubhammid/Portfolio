const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl =  gsap.timeline()

tl.from("nav h1, nav button",{
    y : -40,
    duration : 0.7,
    delay : 0.5,
    opacity : 0,
    stagger : 0.15
})

tl.from(".center-part1 h4",{
   x: -300,
   duration : 0.3,
   delay: 0.2,
   opacity: 0
})

tl.from(".center-part1 h1",{
    x: 300,
    duration : 0.4,
    delay: 0.1,
    opacity: 0
 })