let brick;

function setup() {
  createCanvas(400, 400);
  brick = new Brick(width/2, height/2, 100, 200);
}

function draw() {
  background(220);
  brick.drawBrick();
}