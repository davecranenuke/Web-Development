var btnAvailable = ["green", "red", "yellow", "blue"];
var levelCounter = 1;
var btnSequence = [];

$(".btn").click(function() {
  // var btnClicked = $(this).attr('class');
  var btnClicked = $(this);
  levelCounter++;
  $("h1").html("Level " + levelCounter);
  btnSequenceStart();
});


function btnSequenceStart() {
  let intervalID = 0;
  for (i=1; i<=levelCounter; i++) {
    var btnRandom = Math.floor(Math.random()*4);
    btnSequence.push(btnAvailable[btnRandom]);
    var btnPicked = btnSequence;
  }
  lightMyBtn(btnSequence)

}

function lightMyBtn(btnPicked) {
  console.log(btnPicked);
  for(i=0; i<=btnPicked.length-1; i++) {
    var idPicked = "#" + btnPicked[i];
    console.log(idPicked);
    lightButton(idPicked);
    console.log("Lit");
  }
}

function lightButton(idPicked) {
  $(idPicked).addClass("pressed");
  setTimeout(function () {$(idPicked).removeClass("pressed");}, 750);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
