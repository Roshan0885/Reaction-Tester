// Start the timer when the page loads
var start = new Date().getTime();

// Generate a random hex color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Show the box at random size and position
function move() {
  var left;
  var top;
  var wh;

  wh = (Math.random() * 200) + 100;
  left = Math.random() * (window.innerWidth - wh);
  top = Math.random() * (window.innerHeight - wh);

  var box = document.getElementById("box");
  box.style.left = left + "px";
  box.style.top = top + "px";
  box.style.width = wh + "px";
  box.style.height = wh + "px";
  box.style.backgroundColor = getRandomColor();
  box.style.display = "block";

  start = new Date().getTime();
}

// When box is clicked, calculate and show reaction time
document.getElementById("box").onclick = function () {
  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;

  alert("Your reaction time: " + timeTaken + " seconds");

  document.getElementById("box").style.display = "none";
  move();
};

// Start the game
move();
