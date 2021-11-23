var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var random1=document.getElementById("random1");
var random2=document.getElementById("random2");


function init(){
  css.textContent="linear-gradient(to right, #ff0000, #ffff00);";
}

init();

function setGradient(){
  body.style.background=
    "linear-gradient(to right, "
     + color1.value
     + ", "
     + color2.value
     +")";

     css.textContent=body.style.background + ";";
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);



function randoGradient(){
  var c1= Math.floor(Math.random() * 256);
  var c2= Math.floor(Math.random() * 256);
  var c3= Math.floor(Math.random() * 256);
  var c4= Math.floor(Math.random() * 256);
  var c5= Math.floor(Math.random() * 256);
  var c6= Math.floor(Math.random() * 256);
  body.style.background=
    "linear-gradient(to right, rgb("
     + c1
     + ", "
     + c2
     + ", "
     + c3
     +"),"
     +"rgb("
     + c4
     + ", "
     + c5
     + ", "
     + c6
     +"))";

    css.textContent=body.style.background + ";";
}

random1.addEventListener("click",randoGradient);
