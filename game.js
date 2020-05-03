var buttonColors = ["red", "blue", "green", "yellow"];

//Array for pattern given to user by computer
var gamePattern = [];

//Array for pattern user chose
var userClickedPattern = [];

//this function beeps random color, and stores the color in gamePattern
function nextSequence() {
  var randomNum = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNum];
  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
}

//playSound function plays sound when user clicks colour and when computer gives pattern
function playSound(name) {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

//Handler when user clicks a color
$(`.btn`).on("click", function () {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
});
