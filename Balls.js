let n, red, blue, green, rN, gN, bN, Sz;

function Ball(x, y) {

  this.x = x,
    this.y = y,
    this.display = function () {
      red = 0.007;
      green = 0.003;
      blue = 0.005;
      nsz = 0.05;

      rN = noise(this.x * red, this.y * red) * 260;
      gN = noise(this.x * green, this.y * green) * 260;
      bN = noise(this.x * blue, this.y * blue) * 260;
      Sz = noise(this.x * nsz, this.y * nsz) * 30;

      fill(rN, gN, bN, 200);
      strokeWeight(1);
      stroke(0, 0, 0, 50);
      ellipse(this.x, this.y, Sz);
    },
    this.move = function () {
      let dirX = 0.07;
      let dirY = 0.09;

      let nX = noise(this.x * dirX, this.y * dirY) * 2 - 1;
      let nY = noise(this.y * dirX, this.y * dirY) * 3 - 1.5;

      constrain(this.x += nX, 0, width - 50);
      constrain(this.y += nY, 0, height - 50);
    }
}
