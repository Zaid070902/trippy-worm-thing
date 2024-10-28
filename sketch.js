let balls = [];
let numPoints = 3500;
let scale = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  frameRate(30);
}

function mousePressed() {
  for (let i = 0; i < numPoints; i++) {
    let t = map(i, 0, numPoints, 0, TWO_PI * 12);
    let x =
      scale * (sin(t) * (exp(cos(t)) - 3 * cos(4 * t) - pow(sin(t / 12), 5))) +
      mouseX;
    let y =
      scale * (cos(t) * (exp(cos(t)) - 2 * cos(4 * t) - pow(sin(t / 12), 5))) +
      mouseY;

    balls.push(new Ball(x, y));
  }
}

function draw() {
  // blendMode(DIFFERENCE);
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
  }
}
