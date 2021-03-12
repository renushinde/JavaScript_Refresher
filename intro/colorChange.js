
let button = document.getElementById("btn");
let colors = ["red", "yellow", "green", "purple"];
button.addEventListener('click', function(){
  let randomColors =colors[ Math.floor(Math.random() * colors.length)];
  document.getElementById("box").style.background= randomColors;
});