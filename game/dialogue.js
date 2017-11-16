var PIXI = require('pixi.js')
var createDialogueText = require('./text').createDialogueText
var createRichText = require('./text').createRichText

var pointer = function () {
  document.body.style = 'cursor: pointer;'
}

var normal = function () {
  document.body.style = 'cursor: normal;'
}

function Dialogue (width, height, padding) {
  var x = 240
  var y = 180
  this.width = width
  this.height = height

  this.padding = padding

  if (!this.padding) {
    this.padding = 20
  }

  var graphics = new PIXI.Graphics()
  graphics.beginFill(0xDD00DD, 0.8)
  graphics.drawRect(x, y, width, height); // drawRect(x, y, width, height)
  graphics.endFill();

  // var text = new PIXI.Text('Bla bla')
  this.title = createRichText('Bla Bla', x + padding, y +  padding)
  this.text = createDialogueText('Bla Bla', x + padding, y + padding + 42, {
    wordWrapWidth: width - padding
  })
  var texture = new PIXI.Texture.fromImage('./assets/placeholder.png')
  this.preview = new PIXI.Sprite(texture)
  this.preview.position.x = x + padding
  this.preview.position.y = y + padding + 20
  graphics.addChild(this.title)
  graphics.addChild(this.text)
  graphics.addChild(this.preview)

  this.activeThing = {}

  // graphics.interactive = true

  this.textures = {}

  this.sprite = graphics
  this.sprite
  .on('mousedown', this.onButtonDown, this)
  .on('touchstart', this.onButtonDown, this)
  .on('mouseover', pointer, this)
  .on('mouseout', normal, this)
}

Dialogue.prototype.onButtonDown = function () {
  window.open(this.activeThing.url, '_blank')
}

Dialogue.prototype.show = function (thing) {
  if (!this.sprite.interactive) {
    this.sprite.interactive = true
  }

  this.sprite.alpha = 1
  this.activeThing = thing.thing
  // this.text.setText(thing.thing.text)
  this.text.text = thing.thing.text
  this.title.text = thing.thing.title
  var texture
  if (!this.textures[thing.thing.preview]) {
    this.textures[thing.thing.preview] =  new PIXI.Texture.fromImage(thing.thing.preview)
  }
  texture = this.textures[thing.thing.preview]
  this.preview.texture = texture

  // debugger
  this.preview.position.y = this.text.y + this.text.height + this.padding
}

Dialogue.prototype.hide = function () {
  this.sprite.alpha = 0
}

module.exports = Dialogue
