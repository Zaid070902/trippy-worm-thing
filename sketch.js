let balls = [];
let VSpacing = 5;
let HSpacing = 5;

let numdots = 200;
let r = 100;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(11);
}

function mousePressed() {
  for (let i = 0; i < 50; i++) {
    balls.push(new Ball(mouseX, mouseY + i * VSpacing));
    for (let j = 0; j < 5; j++) {
      balls.push(new Ball(mouseX + j * HSpacing, mouseY + i * VSpacing));
    }
  };

};

function draw() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
  }
}
