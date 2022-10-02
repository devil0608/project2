function fronttextanimation(){
    gsap.from(".row>h1", {
        y:250,
        duration:1,
        stagger:.6
    })
    gsap.from("#sidetext", {
        y:50,
        duration:1,
        stagger:.6,
        opacity:0
    })
}
// fronttextanimation();