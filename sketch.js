let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(11);
}

function mouseDragged() {
  balls.push(new Ball(mouseX, mouseY));
}

function draw() {
  // background(11);
  ellipseMode(CENTER);
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
  }
}
