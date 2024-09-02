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

      strokeWeight(5);
      stroke(rN , gN, bN, 50);
      line(this.x, this.y, this.x, this.y);
    },
    this.move = function () {
      let dirX = 0.01;
      let dirY = 0.02;

      let nX = noise(this.x * dirX, this.y * dirY) * 8 - 4;
      let nY = noise(this.y * dirX, this.y * dirY) * 4 - 2;

      this.x = constrain(this.x += nX, 0, width);
      this.y = constrain(this.y += nY, 0, height);
    }
}
