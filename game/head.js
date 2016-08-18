
/**
 * Head - returns a head with a 2 sprite 'animation'
 * with some helper functions.
 * LIST_OF_THINGS is a json with some images and urls
 *
 * @return {Object}  Head class with helper functions
 */

var headTextures = [
  PIXI.Texture.fromImage('./assets/head.png'),
  PIXI.Texture.fromImage('./assets/head1.png'),
]

var Thing = require('./thing')
var constants = require('./constants')

function Head () {
  this.x = (constants.WINDOW_WIDTH - 200) * Math.random()
  this.y = (constants.WINDOW_HEIGHT - 200) * Math.random()
  xDir = (Math.random() < 0.49) ? -1 : 1
  yDir = (Math.random() < 0.49) ? -1 : 1

  this.xSpeed = 1 + Math.random() * xDir
  this.ySpeed = 1 + Math.random() * yDir

  // initiate sprite with head textures
  this.sprite = new PIXI.Sprite(headTextures[0])
  // center the sprite's anchor point
  this.sprite.anchor.x = 0.5
  this.sprite.anchor.y = 0.5
  // move the sprite to the center of the screen
  this.sprite.position.x = this.x
  this.sprite.position.y = this.y

  // make it clickable
  this.sprite.interactive = true
  this.frame = 0

}

/**
 * onButtonDown - callback for the clicks and touches
 *
 * @return {void}
 */
Head.prototype.onButtonDown = function () {
  this.animate()
}

Head.prototype.update = function () {
  var oldX = parseFloat(this.x)
  var oldY = parseFloat(this.y)

  if (this.x < 0 + constants.PADDING ||
      this.x > constants.WINDOW_WIDTH - constants.PADDING) {
    this.xSpeed = -this.xSpeed
  }

  if (this.y < 0 + constants.PADDING ||
      this.y > constants.WINDOW_HEIGHT - constants.PADDING) {
    this.ySpeed = -this.ySpeed
  }

  this.x = this.x + this.xSpeed
  this.y = this.y + this.ySpeed
  this.sprite.position.x = this.x
  this.sprite.position.y = this.y
}


/**
 * animate - super shitty animation with a timeout. Don't ever use this
 *
 * @return {void}
 */
Head.prototype.animate = function () {
  var self = this;
    setTimeout(function () {
      if (self.frame < headTextures.length - 1) { self.frame++ } else { self.frame = 0}
      self.sprite.texture = headTextures[self.frame]
    }, 15)
    setTimeout(function () {
      if (self.frame < headTextures.length - 1) { self.frame++ } else { self.frame = 0}
      self.sprite.texture = headTextures[self.frame]
    }, 150)
}

module.exports = Head
