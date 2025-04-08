var movement;
var movement1;
var size = 22;
var sizeDirection = 1;
var x = 200;
var y = 200;
var count = 0;

function setup() {
  movement = floor(random() * 10 + 1);
  movement1 = floor(random() * 10 + 1);
  createCanvas(400, 400);
}

function draw() {
  background(200, 20, 100);
  circle(x, 200, 100);
  ellipse(200, y, 100, 200);
  circle(180, 200, 10);
  circle(220, 200, 10);
  line(x, 240, 220, y);
  triangle(100, 400, 170, 275, 120, 400);
  triangle(300, 400, 230, 275, 320, 400);
  rect(190, y, 20, 100);
  point(x, 220);
  textSize(size);
  size += sizeDirection;
  count++;
  if (count > 5) {
    sizeDirection *= -1;
    count = 0;
  }
  text("Gus Hunt", 300, 390);
  if (x >= 350 || x <= 50) {
    movement *= -1;
  }
  x += movement;

  if (y >= 350 || y <= 50) {
    movement1 *= -1;
  }
  y += movement1;
}