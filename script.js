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
fronttextanimation();
function cursorlink(){
    document.addEventListener("mousemove",function(dets){
            document.querySelector(".cursor").style.left = `${dets.x+-25}px`
            document.querySelector(".cursor").style.top = `${dets.y+-25}px`
    })
}
cursorlink();
function imageanimation(){
    var background = document.querySelector("#fullpage");
    var image1 = document.querySelector(".image");
    var image2 = document.querySelector(".image2");
    var image3 = document.querySelector(".image3");
    var image4 = document.querySelector(".image4");
    var image5 = document.querySelector(".image5");
    image1.addEventListener("mouseenter",function(){
            
            background.style.backgroundColor = "#FFC500"
    })
    image1.addEventListener("mouseleave",function(){
        
        background.style.backgroundColor = "white"
    })
    // secondpic

    image2.addEventListener("mouseenter",function(){
        
        background.style.backgroundColor = "#e22a22"
    })
    image2.addEventListener("mouseleave",function(){
     
        background.style.backgroundColor = "white"
    })
    //thirdpic

    image3.addEventListener("mouseenter",function(){
       
        background.style.backgroundColor = "#1c6296"
    })
    image3.addEventListener("mouseleave",function(){
     
        background.style.backgroundColor = "white"
    })
    //foruthpic
    image4.addEventListener("mouseenter",function(){
       
        background.style.backgroundColor = "black"
    })
    image4.addEventListener("mouseleave",function(){
     
        background.style.backgroundColor = "white"
    })
    //fifthpic
    image5.addEventListener("mouseenter",function(){
       
        background.style.backgroundColor = "#013b49"
    })
    image5.addEventListener("mouseleave",function(){
     
        background.style.backgroundColor = "white"
    })
}
imageanimation();
