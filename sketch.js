let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(11);
}

function mouseDragged() {
  balls.push(new Ball(mouseX - random(60), mouseY - random(60)));
  balls.push(new Ball(mouseX - random(60), mouseY - random(60)));
  balls.push(new Ball(mouseX + random(60), mouseY + random(60)));
  balls.push(new Ball(mouseX + random(60), mouseY + random(60)));
}

function mousePressed() {
  background(11);
  balls.length = 0;
}

function draw() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
  }
}
