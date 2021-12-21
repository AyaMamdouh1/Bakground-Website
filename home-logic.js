


var color1=document.getElementById("color1");
var color2=document.getElementById("color2")
var colorval=document.getElementById("colorval");
var colorval2=document.getElementById("colorval2")
var colorval3=document.getElementById("colorval3")

document.addEventListener("input", function(){

    
    var clr1=color1.value;
    colorval.style.color=clr1;
    var clr2=color2.value;
    colorval2.style.color=clr2;
    colorval3.style.color=clr2;
    console.log(clr1)
    console.log(clr2)
    body.style.backgroundColor=clr1;
    document.body.style.background='-webkit-linear-gradient('+'left'+',' +clr1+','+clr2  +')';



})
