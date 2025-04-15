var x = 50;
var y = 300;
var altx = 200;
var alty = 100;
var diameter = 25;
var randomVal;
var randomVal2;
var mousex = 0;
var mousey = 0;

function setup() {
  createCanvas(800, 600);
  randomVal = Math.floor(Math.random() * 10 + 1);
  randomVal2 = Math.floor(Math.random() * 10 + 1);
}
function draw() {
  background(0);
  fill(250);
  circle(x, y, diameter);
  text("EXIT->", 750, 300);
  fill(0, 0, 255);
  square(altx, alty, 20);
  fill(0, 225, 0);
  rect(altx, 400, 10, 30);
  fill(225);
  circle(mousex, mousey, 15);

  altx += randomVal;
  alty += randomVal2;

  if (keyIsDown(68)) {
    x++;
  }
  if (keyIsDown(65)) {
    x--;
  }
  if (keyIsDown(83)) {
    y++;
  }
  if (keyIsDown(87)) {
    y--;
  }

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

  fill(225);
  if (x >= 800) {
    text("you win", 400, 300);
  }
  if (x <= 0) {
    text("wrong way", 400, 300);
  }
}
function mouseClicked() {
  mousex = mouseX;
  mousey = mouseY;
}