let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(11);

  for (let i = 0; i < 300; i++) {
    balls[i] = {
      x: random(0, width),
      y: random(0, height),
      size: random(2, 20),
      display: function () {
        ellipse(this.x, this.y, this.size);
      },
      move: function () {
        let dirX = 0.006;
        let dirY = 0.004;

        let nX = noise(this.x * dirX, this.y * dirY) * 6 - 3;
        let nY = noise(this.y * dirX, this.y * dirY) * 6 - 3;

        this.x += nX;
        this.y += nY;
      }
    }
  }
}

function draw() {
  // background(255);
  ellipseMode(CENTER);
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
  }
}
