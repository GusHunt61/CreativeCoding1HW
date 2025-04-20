var x = 50;
var y = 300;
var altx = 200;
var alty = 100;
var randomVal;
var mousex = 0;
var mousey = 0;

function setup() {
  createCanvas(800, 600);
  randomVal = Math.floor(Math.random() * 10 + 1);
  randomVal2 = Math.floor(Math.random() * 10 + 1);
}
function draw() {
  background(0);
  createBorders(800, 600, 20);
  makePlayer(25);
  text("EXIT->", 750, 300);
  makeObstacles();
  fill(255);
  circle(mousex, mousey, 10);
  moveObstacles();
  obstacleParameters();
  movePlayer(5);
  exits();
}
function makePlayer(diameter) {
  fill(255);
  circle(x, y, diameter);
}

function movePlayer(moveAmount) {
  if (keyIsDown(68)) {
    x += moveAmount;
  }
  if (keyIsDown(65)) {
    x -= moveAmount;
  }
  if (keyIsDown(83)) {
    y += moveAmount;
  }
  if (keyIsDown(87)) {
    y -= moveAmount;
  }
}
function makeObstacles() {
  fill(0, 0, 255);
  square(altx, alty, 20);
  fill(0, 225, 0);
  rect(altx, 400, 10, 30);
}

function moveObstacles() {
  altx += randomVal;
  alty += randomVal2;
}
function obstacleParameters() {
  if (alty > 600) {
    alty = 0;
  }
  if (altx > 800) {
    altx = 0;
  }
  if (alty < 0) {
    alty = 600;
  }
  if (altx < 0) {
    altx = 800;
  }
}
function createBorders(width, height, thickness) {
  rect(0, 0, width, thickness);

  rect(0, height - thickness, width, thickness);
}
function mouseClicked() {
  mousex = mouseX;
  mousey = mouseY;
}
function exits() {
  if (x >= 800) {
    text("you win", 400, 300);
  }
  if (x <= 0) {
    text("wrong way", 400, 300);
  }
}