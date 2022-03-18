var PIXI = require('pixi.js')
var constants = require('./constants')
var bgColors = require('./bgColors')

var renderer = PIXI.autoDetectRenderer(constants.WINDOW_WIDTH, constants.WINDOW_HEIGHT, {
  backgroundColor : bgColors[0]
})

var stage = new PIXI.Container()
document.body.appendChild(renderer.view)

module.exports = {
  stage: stage,
  renderer: renderer
}
