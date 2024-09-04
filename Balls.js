let n, red, blue, green, rN, gN, bN, Sz;

function Ball(x, y) {

  this.x = x,
    this.y = y,
    this.display = function () {
      red = 0.005;
      green = 0.009;
      blue = 0.005;
      nsz = 0.03;

      rN = noise(this.x * red, this.y * red) * 400;
      gN = noise(this.x * green, this.y * green) * 200;
      bN = noise(this.x * blue, this.y * blue) * 500;
      Sz = noise(this.x * nsz, this.y * nsz) * 15;

      strokeWeight(Sz);
      stroke(rN, gN, bN, Sz);
      point(this.x, this.y);
    },

    this.move = function () {
      let dirX = 0.05;
      let dirY = 0.04;

      let nX = noise(this.x * dirX, this.y * dirY) * 10 - 5;
      let nY = noise(this.y * dirX, this.y * dirY) * 5 - 3.5;

      this.x = constrain(this.x += nX, 0, width);
      this.y = constrain(this.y += nY, 0, height);
    }
}
