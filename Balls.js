let red, blue, green, rN, gN, bN, Sz;

function Ball(x, y) {
  this.x = x;
  this.y = y;

  this.display = function () {
    red = 0.001;
    green = 0.005;
    blue = 0.002;
    nsz = 0.03;

    rN = noise(this.x * red, this.y * red) * 500;
    gN = noise(this.x * green, this.y * green) * 300;
    bN = noise(this.x * blue, this.y * blue) * 480;
    Sz = noise(this.x * nsz, this.y * nsz) * 5;

    strokeWeight(Sz);
    stroke(rN + 100, gN - 100, bN, Sz);
    point(this.x, this.y);
  };

  this.move = function () {
    let dirX = 0.05;
    let dirY = 0.03;

    let nX = noise(this.x * dirX, this.y * dirY) * 4 - 2;
    let nY = noise(this.y * dirX, this.y * dirY) * 2 - 1;

    this.x = constrain(this.x + nX, 0, width);
    this.y = constrain(this.y + nY, 0, height);
  };
}
