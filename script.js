var tl=gsap.timeline()
tl.from("#nav",{
    opacity:0,
    delay:.3
})

tl.from("#nav h1", {
    x: -80,
    opacity: 0,
    duration: .8,
    delay: 0.3
  });
  tl.from("#nav-part2 h3", {
    y: -80,
    opacity: 0,
    duration: .8,
    delay: 0.3
  });
  tl.from("#nav h4", {
    x: 80,
    opacity: 0,
    duration: .8,
    delay: 0.3
  });

  tl.from("#left h1",{
    opacity:0,
    duration:.5,
    x:-500,
    stagger:.4
  })

  tl.from("#right img",{
    scale:.2,
    opacity:0,
    duration:.5
  })
  
  
 gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        start:"top 70%"
    
    }
 })
 gsap.from("#page2 .box1",{
    scale:0,
    opacity:0,
    duration:1,
    x:-100,
    stagger:.3,
    scrollTrigger:{
        trigger:"#page2 .box1",
        scroller:"body",
        start:"top 70%"
    
    }
 })
 gsap.from("#page2 .box2",{
    scale:0,
    y:100,
    opacity:0,
    duration:1,
    stagger:.3,
    scrollTrigger:{
        trigger:"#page2 .box2",
        scroller:"body",
        start:"top 70%"
    
    }
 })

 gsap.from("#page2 .box3",{
    scale:0,
    y:100,
    opacity:0,
    duration:1,
    stagger:.3,
    scrollTrigger:{
        trigger:"#page2 .box3",
        scroller:"body",
        start:"top 70%"
    
    }
 })
 gsap.from("#page2 .box4",{
    scale:0,
    x:-100,
    opacity:0,
    duration:1,
    stagger:.3,
    scrollTrigger:{
        trigger:"#page2 .box4",
        scroller:"body",
        start:"top 70%"
    
    }
 })
  