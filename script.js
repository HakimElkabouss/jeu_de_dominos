var add = 0;

function rotate() {
  document.getElementById("domino66").style.transform = 'rotate('+add+'deg)'; 
  add += 90; 
}
var el = document.getElementById("domino66"); 
el.addEventListener("click", rotate);

function deplacer(){
  var img = document.getElementById('dominos');   
  document.getElementById('nav3').appendChild(img);
}
var li = document.getElementById('dominos');
li.addEventListener("click", deplacer);

 
