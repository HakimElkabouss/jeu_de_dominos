// var dominos = [
//   "images/im1.png",
//   "images/im2.png", 
//   "images/im3.png",  
//   "images/im4.png",
//   "images/im5.png", 
//   "images/im6.png", 
//   "images/im7.png", 
//   "images/im8.png", 
//   "images/im9.png", 
//   "images/im10.png", 
//   "images/im11.png", 
//   "images/im12.png", 
//   "images/im13.png", 
//   "images/im14.png", 
//   "images/im15.png", 
//   "images/im16.png", 
//   "images/im17.png", 
//   "images/im18.png", 
//   "images/im19.png", 
//   "images/im20.png", 
//   "images/im21.png", 
//   "images/im22.png", 
//   "images/im23.png", 
//   "images/im24.png", 
//   "images/im25.png", 
//   "images/im26.png", 
//   "images/im27.png"
// ]

// var dominos = ['dominos1','dominos2','dominos3','dominos4','dominos5','dominos6','dominos7','dominos8','dominos9','dominos10','dominos11','dominos12','dominos13']

// var mainj1 = [];
// var mainj2 = [];

// var Distribution = function(x){
//   for(var i=0; i < 7; i++){
//     var random = Math.floor(math.random()*dominosArray.length);
//     var domino = dominosArray[random];
//     x.push(domino);
//     dominosArray.splice(random, 1);
//   }
// }

// Distribution(mainj1);
// Distribution(mainj2);
// console.log(mainj1);
// console.log(mainj2);
// console.log(dominosArray);

// document.getElementById("item").innerHTML = '<img src="' + mainj1.join('" /><img src="') + '" />';
// document.getElementById("item").innerHTML = '<img src="' + mainj2.join('" /><img src="') + '" />';
var myAudio = document.createElement("audio");
myAudio.src = "undertale-megalovania.mp3";
myAudio.play();

var dominos = document.getElementsByClassName('dominos');
var dominosArray = [...dominos];
var dominos2 = document.getElementsByClassName('dominos2');
var dominosArray1 = [...dominos2];

var add = 0;
// function rotate(argElement) {
//   argElement.add += 90;
//   argElement.style.transform = 'rotate('+ argElement.add +'deg)'; 
//   console.dir(argElement);
// }

dominosArray.forEach(
  function (domino, p){
    var element = dominosArray[p];
    element.add = 0;
    console.dir(element);
    function rotate(argElement) {
      argElement.add += 90;
      argElement.style.transform = 'rotate('+ argElement.add +'deg)'; 
      console.dir(argElement);
    }
    element.addEventListener("click", rotate.bind(this, element));
  }
)
dominosArray1.forEach(
  function (domino, r){
    var element = dominosArray1[r];
    element.add = 0;
    console.dir(element);
    function rotate(argElement) {
      argElement.add += 90;
      argElement.style.transform = 'rotate('+ argElement.add +'deg)'; 
      console.dir(argElement);
    }
    element.addEventListener("click", rotate.bind(this, element));
  }
)


// FUNCTION MELANGE 

function Melange(dominosArray){
  for (var i=0; i < dominosArray.length; i++){
    var random = Math.floor(Math.random()*dominosArray.length);
    [dominosArray[i],dominosArray[random]] = [dominosArray[random],dominosArray[i]];
  }
  return dominosArray;
}
console.log(Melange(dominosArray));

function Melange(dominosArray1){
  for (var i=0; i < dominosArray1.length; i++){
    var random = Math.floor(Math.random()*dominosArray1.length);
    [dominosArray1[i],dominosArray1[random]] = [dominosArray1[random],dominosArray1[i]];
  }
  return dominosArray1;
}
console.log(Melange(dominosArray1));


// BOUCLE MELANGE
// for(var position = dominosArray.length-1; position >= 1; position--){

// 	//hasard reçoit un nombre entier aléatoire entre 0 et position
//   var random=Math.floor(Math.random()*(position+1));
  
// 	//Echange
// 	var s = dominosArray[position];
// 	dominosArray[position] = dominosArray[random];
// 	dominosArray[random] = s;
// }
// console.log(dominosArray);

// for(var position = dominosArray1.length-1; position >= 1; position--){

// 	//hasard reçoit un nombre entier aléatoire entre 0 et position
//   var hasard=Math.floor(Math.random()*(position+1));
  
// 	//Echange
// 	var s = dominosArray1[position];
// 	dominosArray1[position] = dominosArray1[hasard];
// 	dominosArray1[hasard] = s;
// }
// console.log(dominosArray1);


// FUNCTION DEPLACER
// dominosArray.forEach(
//   function (domino, p){
//     var element = dominosArray[p];
//     console.dir(element);
//     function deplacer() {
//       var img = document.getElementById('domino');   
//       document.getElementById('nav3').appendChild(img);
//     }
//     element.addEventListener("dblclick", deplacer.bind(this, element));
//   }
// )

function move(){
  document.getElementById('domino').style.position = "relative";
  document.getElementById('domino').style.left = "494";
  document.getElementById('domino').style.top = "202";
}

// function move1(positionDomino){
// document.getElementById('domino' + po).style.position = "relative";
// document.getElementById('domino' + 1).style.right= "256";
// document.getElementById('domino' + 1).style.bottom = "118";
// }

function move1(){
  document.getElementById('domino10').style.position = "relative";
  document.getElementById('domino10').style.right = "254";
  document.getElementById('domino10').style.bottom = "118";
}
function move2(){
  document.getElementById('domino1').style.position = "relative";
  document.getElementById('domino1').style.left = "574";
  document.getElementById('domino1').style.top= "62";
}
function move3(){
  document.getElementById('domino7').style.position = "relative";
  document.getElementById('domino7').style.right = "254";
  document.getElementById('domino7').style.bottom = "18";
}
function move4(){
  document.getElementById('domino4').style.position = "relative";
  document.getElementById('domino4').style.left = "514";
  document.getElementById('domino4').style.bottom = "257";
}
function move5(){
  document.getElementById('domino9').style.position = "relative";
  document.getElementById('domino9').style.right = "392";
  document.getElementById('domino9').style.bottom = "177";
}

function move6(){
  document.getElementById('domino5').style.position = "relative";
  document.getElementById('domino5').style.left = "357";
  document.getElementById('domino5').style.bottom = "337";
}

function move7(){
  document.getElementById('domino8').style.position = "relative";
  document.getElementById('domino8').style.right = "550";
  document.getElementById('domino8').style.bottom = "97";
}

function move8(){
  document.getElementById('domino3').style.position = "relative";
  document.getElementById('domino3').style.left = "278";
  document.getElementById('domino3').style.bottom = "118";
}

function move9(){
  document.getElementById('domino6').style.position = "relative";
  document.getElementById('domino6').style.right = "550";
  document.getElementById('domino6').style.top = "200";
}

function move10(){
  document.getElementById('domino11').style.position = "relative";
  document.getElementById('domino11').style.right = "278";
  document.getElementById('domino11').style.top = "119";
}