let n, red, blue, green, rN, gN, bN, Sz;

function Ball(x, y) {

  this.x = x,
    this.y = y,
    this.display = function () {
      red = 0.003;
      green = 0.005;
      blue = 0.001;
      nsz = 0.007;

      rN = noise(this.x * red, this.y * red) * 460;
      gN = noise(this.x * green, this.y * green) * 200;
      bN = noise(this.x * blue, this.y * blue) * 460;
      Sz = noise(this.x * nsz, this.y * nsz) * 20;

      fill(rN, gN, bN, 200);
      strokeWeight(2);
      stroke(rN - 150, gN - 150, bN - 150, 100);
      ellipse(this.x, this.y, Sz);
    },
    this.move = function () {
      let dirX = 0.02;
      let dirY = 0.04;

      let nX = noise(this.x * dirX, this.y * dirY) * 6 - 3;
      let nY = noise(this.y * dirX, this.y * dirY) * 3 - 1.5;

      constrain(this.x += nX, 0, width - 50);
      constrain(this.y += nY, 0, height - 50);
    }
}