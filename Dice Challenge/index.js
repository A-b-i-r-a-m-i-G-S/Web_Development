var randomNumber1 = Math.floor((Math.random() * 6) + 1)
var diceimg1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",diceimg1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var diceimg2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",diceimg2);


var heading = "";
if(randomNumber1===randomNumber2){
    heading = "Draw";
} else if(randomNumber1>randomNumber2){
    heading = "Player 1 wins";
} else{
    heading = "Player 2 wins";
}

document.querySelector("h1").textContent = heading;