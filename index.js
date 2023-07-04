var buttonColor = document.getElementById("btnColor");
var buttonShape = document.getElementById("btnShape");
var outerDiv = document.getElementById("outerDiv");
var innerDiv = document.getElementById("innerDiv");
var colors = ["green", "red", "yellow", "violet", "orange", "blue", "grey"];
var shapes = ["circle", "triangle", "leftAngleTriangle", "rightAngleTriangle"];
var colorIndex = 0;
var shapeIndex = 0;

function changeColor() {
  // var randomColor = colors[Math.floor(Math.random() * colors.length)];
  // outerdiv.style.backgroundColor = randomColor; // if we want to use random color.
  var currentColor = colors[colorIndex];
  outerDiv.style.backgroundColor = currentColor;
  // colorIndex = colorIndex+1; //if we use this it stop on the last color and did't repeate it again.
  colorIndex = (colorIndex + 1) % colors.length;
}
buttonColor.addEventListener("click", changeColor);

function changeShape() {
  // var randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  //innerdiv.className = randomShape;
  var currentShape = shapes[shapeIndex];
  innerDiv.className = currentShape;
  //shapeIndex = shapeIndex + 1;
  shapeIndex = (shapeIndex + 1) % shapes.length;
}
buttonShape.addEventListener("click", changeShape);
