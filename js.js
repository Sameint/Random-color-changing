document.getElementById("color-change").addEventListener("click",function changeColor(){
    let randomColor="#"+Math.floor(Math.random()*12345678).toString(16);
     document.body.style.background=randomColor;
   });
  