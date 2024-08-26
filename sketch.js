let balls = [];
let n, red, blue, green, rN, gN, bN;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(11);
  red = 0.003;
  green = 0.009;
  blue = 0.006;


  for (let i = 0; i < 300; i++) {
    balls[i] = {
      x: random(0, width),
      y: random(0, height),
      size: random(2, 20),
      display: function () {
        rN = noise(this.x * red, this.y * red) * 255;
        gN = noise(this.x * green, this.y * green) * 255;
        bN = noise(this.x * blue, this.y * blue) * 255;

        fill(rN, gN, bN);
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
