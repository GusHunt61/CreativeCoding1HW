var x = 50;
var y = 300;
var diameter = 25;
function setup() {
  createCanvas(800, 600);
}
function draw() {
  background(0);
  fill(250);
  circle(x, y, diameter);
  text('EXIT->', 750,300);
  fill(0, 0, 255);
  square(200,100,20);
  fill(0,225,0);
  rect(500,400,10,30);

  if (keyIsDown(68)) {
    x ++;
  }
  if (keyIsDown(65)) {
    x --;
  }
  if (keyIsDown(83)) {
    y ++;
  }
  if (keyIsDown(87)) {
    y --;
  }
  fill(225);
  if (x >= 800){
    text('you win', 400, 300);
  }
    if (x <= 0){
    text('wrong way', 400, 300);
  }
}
