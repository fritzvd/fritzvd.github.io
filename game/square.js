var colors = [
  0xDD00DD,
  0xDDD,
  0xDDDD00,
  0x00DD00,
  0x00DDDD,
  0xFF0000,
]

function Square (x, y, width, height) {
  var sprite = new PIXI.Graphics
  var randomInt = parseInt(Math.random() * colors.length)
  sprite.beginFill(colors[randomInt], 0.8)
  sprite.drawRect(x, y, width, height); // drawRect(x, y, width, height)
  sprite.endFill();
  sprite.anchor = 0.5

  this.direction = 1

  // sprite.pivot.x = x + width / 2
  // sprite.pivot.y = y + height / 2

  var self = this

  self.sprite = sprite
  setInterval(function () {
    self.flip()
  }, 10)

  return sprite
}

Square.prototype.flip = function () {
  this.sprite.skew.y += 0.01 * this.direction
  this.sprite.skew.x += 0.01 * this.direction

  if (this.sprite.skew.x > 3) {
    this.direction = -1
  }

  if (this.sprite.skew.x < -3) {
    this.direction = 1
  }
}

module.exports = Square
