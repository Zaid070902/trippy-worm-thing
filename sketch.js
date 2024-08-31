let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(11);
}

function mouseDragged() {
  balls.push(new Ball(mouseX, mouseY));
  balls.push(new Ball(mouseX - 30, mouseY - 30));
  balls.push(new Ball(mouseX + 30, mouseY - 30));
  balls.push(new Ball(mouseX - 30, mouseY + 30));
  balls.push(new Ball(mouseX + 30, mouseY + 30));



}

function draw() {
  // background(11);
  ellipseMode(CENTER);
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
  }
}
