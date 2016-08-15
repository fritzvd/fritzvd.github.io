function Thing (thing, x, y, stage) {
  var texture = PIXI.Texture.fromImage('./assets/' + thing.name + '.png')
  this.sprite = new PIXI.Sprite(texture)

  this.sprite.x = x
  this.sprite.y = y

  var self = this
  this.sprite
    .on('mousedown', self.onButtonDown, self)
    .on('touchstart', self.onButtonDown, self)
  stage.addChild(self.sprite)
}

Thing.prototype.onButtonDown = function () {
  window.open(this.url, '_blank')
}

Thing.prototype.animate = function () {

};

module.exports = Thing
