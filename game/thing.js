function Thing (thing, x, y, physics) {
  var texture = PIXI.Texture.fromImage('./assets/' + thing.name + '.png')
  this.sprite = new PIXI.Sprite(texture)

  this.sprite.position.x = x
  this.sprite.position.y = y
  this.sprite.anchor.x = 0.5
  this.sprite.anchor.y = 0.5
  this.body = physics

  var self = this
  this.sprite
    .on('mousedown', self.onButtonDown, self)
    .on('touchstart', self.onButtonDown, self)
}

Thing.prototype.onButtonDown = function () {
  window.open(this.url, '_blank')
}

Thing.prototype.animate = function () {

};

module.exports = Thing
