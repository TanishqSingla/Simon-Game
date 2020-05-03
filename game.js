var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNum];
  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

  var audio = new Audio(`sounds/${randomChosenColor}.mp3`);
  audio.play();
}

$(`.btn`).on("click", function () {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);
});
