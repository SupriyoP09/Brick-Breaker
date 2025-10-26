class Brick {
  constructor(x, y, w, h, spacing, c){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.spacing = spacing;
    this.collide = false;
    this.val = 0;
    this.c = c;
  }
  
  drawBrick(){
    fill(this.c);
    rectMode(CENTER);
    rect(this.x, this.y, this.w-this.spacing, this.h-this.spacing);
  }
  
  collided(ball){
    // 1. Check which side circle is on
    let closeX = ball.x; let closeY = ball.y;
    if (ball.x > this.x + this.w/2 - this.spacing/2) {
      closeX = this.x + this.w/2 - this.spacing/2; // Rect's right edge
    } else if (ball.x < this.x - this.w/2 + this.spacing/2) {
      closeX = this.x - this.w/2 + this.spacing/2; // Rect's left edge
    }
    if (ball.y > this.y + this.h/2 - this.spacing/2) {
      closeY = this.y + this.h/2 - this.spacing/2; // Rect's bottom edge
    } else if (ball.y < this.y - this.h/2 + this.spacing/2) {
      closeY = this.y - this.h/2 + this.spacing/2; // Rect's top edge
    }
    
    // 2. Calculate distance between cx, cy and rect's edge
    let distX = ball.x - closeX;
    let distY = ball.y - closeY;
    let distance = sqrt((distX*distX) + (distY*distY));
    
    // 3. Check if collide: distance <= circle's radius
    if (distance <= ball.r) {
      this.collide = true;
      this.val = 1;
      ball.dy = ball.dy * -1;
    } else {
      this.collide = false;
    }
  }
}