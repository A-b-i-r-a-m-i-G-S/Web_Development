function checkChar(character){
    switch (character){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            break;
    }
    return audio;
}

function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    var audio = checkChar(buttonInnerHTML);
    audio.play();
    buttonAnimation(buttonInnerHTML);
}

function buttonAnimation(character){
    var selectedButton = document.querySelector("." + character);
    selectedButton.classList.add("pressed");
    setTimeout(function(){
        selectedButton.classList.remove("pressed")
        }, 1000);
}

var buttonList = document.querySelectorAll(".drum");

for (let i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener("click",handleClick);
}

document.addEventListener("keypress", function(event){
    var audio = checkChar(event.key);
    audio.play();
    // buttonAnimation(event.key);
});