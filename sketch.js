let balls = [];
let n, red, blue, green, rN, gN, bN, Sz;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(11);
  red = 0.004;
  green = 0.006;
  blue = 0.005;
  nsz = 0.02;


  for (let i = 0; i < 500; i++) {
    balls[i] = {
      x: random(0, width),
      y: random(0, height),
      size: random(0, 200),
      display: function () {
        rN = noise(this.x * red, this.y * red) * 260;
        gN = noise(this.x * green, this.y * green) * 260;
        bN = noise(this.x * blue, this.y * blue) * 260;
        Sz = noise(this.x * nsz, this.y * nsz) * 50;


        fill(rN, gN, bN, 50);
        strokeWeight(1);
        stroke(0, 0, 0, 10);
        ellipse(this.x, this.y, Sz);
      },
      move: function () {
        let dirX = 0.07;
        let dirY = 0.05;

        let nX = noise(this.x * dirX, this.y * dirY) * 4 - 2;
        let nY = noise(this.y * dirX, this.y * dirY) * 4 - 2;

        constrain(this.x += nX, 0, width - 50);
        constrain(this.y += nY, 0, height - 50);
      }
    }
  }
}

function draw() {
  // background(11);
  ellipseMode(CENTER);
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
  }
}
