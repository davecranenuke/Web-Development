
function randomImage() {
  randomNumber = Math.floor(Math.random()*6) + 1;
  randomImg = 'images/dice' + randomNumber + '.png';
  console.log(randomNumber);
  return randomImg;
}

//var selectImageOne = document.getElementsByClassName("img1");
var selectImageOne = document.querySelectorAll('.img1');
var selectImageTwo = document.querySelectorAll('.img2');
var titleSelect = document.querySelector('h1');

var randomImageOne = randomImage();
var randomImageTwo = randomImage();
selectImageOne[0].setAttribute('src', randomImageOne);
selectImageTwo[0].setAttribute('src', randomImageTwo);
console.log(randomImageOne.slice(11,12));
console.log(randomImageTwo.slice(11,12));

if (randomImageOne.slice(11,12) > randomImageTwo.slice(11,12)) {
  titleSelect.innerHTML = "Player 1 Wins";
} else if (randomImageOne.slice(11,12) == randomImageTwo.slice(11,12)) {
  titleSelect.innerHTML = "It's a Tie";
} else {titleSelect.innerHTML = "Player 2 Wins";}
