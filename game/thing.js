var PIXI = require('pixi.js')

var constants = require('./constants')
var World = require('matter-js').World
var Bodies = require('matter-js').Bodies
var Body = require('matter-js').Body

var physics = require('./physics')
var stage = require('./stage').stage

function createPhysics(sprite, x, y) {
  var boxPadding = 5
  var box
  if (Math.abs(sprite.width - sprite.height) > 3 ) {
    box = Bodies.rectangle(x, y, sprite.width - boxPadding, sprite.height - boxPadding)
  } else {
    box = Bodies.circle(x, y, sprite.width / 2 - boxPadding)
  }
  var xDir = (Math.random() < 0.5) ? -1 : 1
  World.add(physics.engine.world, [box])
  Body.setVelocity(box, {x: 10 * xDir, y: -4})
  return box
}

function Thing (thing, x, y) {
  var texture = PIXI.Texture.fromImage('./assets/' + thing.name + '.png')
  this.sprite = new PIXI.Sprite(texture)

  this.sprite.position.x = x
  this.sprite.position.y = y
  this.sprite.anchor.x = 0.5
  this.sprite.anchor.y = 0.5
  this.thing = thing

  this.body = createPhysics(this.sprite, x, y)

  var self = this
}

Thing.prototype.remove = function (stage, world) {
  console.log('removing things')
  stage.removeChild(this.sprite)
  World.remove(world, this.body)
}

Thing.prototype.update = function () {
  this.sprite.position = this.body.position
  this.sprite.rotation = this.body.angle
};

module.exports = Thing
