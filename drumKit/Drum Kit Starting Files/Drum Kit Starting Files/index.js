

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  document.addEventListener("keydown", handleClick);
}

// var audio = new Audio('audio_file.mp3');
// audio.play();

function handleClick() {

  if(event.type == "keydown") {
    var buttonInnerHTML = event.key;
  } else {
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
      lightMeUp('w');
    break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      lightMeUp('a');
    break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      lightMeUp('s');
    break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      lightMeUp('d');
    break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      lightMeUp('j');
    break;
    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      lightMeUp('k');
    break;
    case "l":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      lightMeUp('l');
    break;
    default:
      console.log("Wrong key pressed");
  }
}

function lightMeUp(lightKey) {
  var keyLight = document.getElementsByClassName(lightKey);
  console.log("logger", lightKey[0]);
  keyLight[0].classList.add("pressed");
  setTimeout(() => {keyLight[0].classList.remove("pressed");}, 50);
}
