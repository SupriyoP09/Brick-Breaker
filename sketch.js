// Brick's variables
let bricks = [];
let cols = 8; let rows = 3; 
let w = 50; let h = 50;

// Ball's variables
let ball; let cr = 7;

// Paddle's variables
let paddle;

function setup() {
  createCanvas(400, 400);
  ball = new Ball(width/2, height-cr, cr);
  paddle = new Paddle(mouseX);
  for (let i=0; i<cols; i++){
    bricks[i] = [];
    for (let j=0; j<rows; j++){
      bricks[i][j] = new Brick(w/2 + i*w, h/2 + j*h, w, h, 10, 255);
    }
  }
}


function draw() {
  background(220);
  paddle.x = mouseX;
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      if (bricks[i][j].val == 0){
        bricks[i][j].collided(ball);
        bricks[i][j].drawBrick();
      } 
    }
  }
  paddle.drawPaddle();
  paddle.hitPaddle(ball);
  ball.drawBall();
  ball.moveBall();
  ball.checkBoundaries();
}