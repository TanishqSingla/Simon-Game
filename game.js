var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNum];
  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

  var audio = new Audio(`sounds/${randomChosenColor}.mp3`);
  audio.play();
}

$(`div[type='button']`).on("click", function () {
  console.log("click");
});
