let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river5 = document.getElementById("river5")
let boat6 = document.getElementById("boat6")
let h2 = document.querySelector(".muh");
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px" ;
    console.log(value)
    moon.style.top = value * 4 + "px" ;
    mountains3.style.top = value * 0.9 + "px";
      mountains4.style.top = value * 0.4 + "px";
    river5.style.top = value * 0.9 + "px" ;
    boat6.style.left = value * 4 + "px" ;
    h2.style. fontsize = value  + "px"
if (scrollY >= 33){
    h2.style.position = "fixed"
     h2.style. fontsize = 33 + "px"
    if(scrollY >= 280){
        h2.style.display = "none"
    }else{
         h2.style.display = "block"
    }
}else{

}
    if(scrollY >= 72){
       document.querySelector("nav").style.backgroundColor = "#1c2a7dff"
    }else{
    document.querySelector("nav").style.backgroundColor = "#29012f"
    }
}