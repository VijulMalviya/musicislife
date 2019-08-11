var tl= new TimelineMax();

tl.fromTo('.landingfoot', 2, {
    opacity:1,  
    ease:Expo.easeInOut
},{
    opacity:0,
    ease:Expo.easeInOut
})
