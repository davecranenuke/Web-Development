

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}

// var audio = new Audio('audio_file.mp3');
// audio.play();

function handleClick() {
  buttonPressed = this;
  buttonPressed.classList.add("pressed")
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
  setTimeout(() => {buttonPressed.classList.remove("pressed");}, 50);
}
