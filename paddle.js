class Paddle {
  constructor(x){
    this.x = x;
    this.y = height-20; 
    this.w = 80; 
    this.h = 10;
  }
  
  drawPaddle(){
    fill(0);
    rect(mouseX, this.y, this.w, this.h);
  }
  
  hitPaddle(ball){
    let distY = (this.y - this.h/2) - ball.y;
    if (distY <= ball.r && ball.x > this.x - this.w/2 && ball.x < this.x + this.w/2) {
      ball.dy = ball.dy * -1;
    }
  }
}