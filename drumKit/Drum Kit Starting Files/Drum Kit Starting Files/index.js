

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  document.querySelectorAll(".drum")[i].addEventListener("keypress", handleClick);
}

// var audio = new Audio('audio_file.mp3');
// audio.play();

function handleClick() {

  if(event.type == "keypress") {
    var buttonInnerHTML = event.key;
  } else {
    var buttonPressed = this;
    buttonPressed.classList.add("pressed")
    setTimeout(() => {buttonPressed.classList.remove("pressed");}, 50);
    var buttonInnerHTML = this.innerHTML;
  }

  console.log(event); // all event related info
  console.log(event.type);
  console.log(event.key);
  console.log(event.code);

  console.log("click value", buttonInnerHTML);

  switch(buttonInnerHTML) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
    break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
    break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
    break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
    break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
    break;
    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
    break;
    case "l":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
    break;
    default:
      console.log("Wrong key pressed");
  }
}
