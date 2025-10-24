class Brick {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    drawBrick() {
        fill(255);
        rect(this.x, this.y, this.w, this.h);
    }

    collided(ball) {
        let closeX = ball.x;
        let closeY = ball.y;
        if (ball.x > this.x + this.w){
            closeX = this.x + this.w;
        } else if (ball.x < this.x){
            closeX = this.x;
        }

        if (ball.y > this.y + this.h){
            closeY = this.y + this.h;
        } else if (ball.y < this.y) {
            close
        }
    }

}