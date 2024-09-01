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


function mousePressed() {
  background(11);
  balls.length = 0;
}

function draw() {
  ellipseMode(CENTER);
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
  }
}
