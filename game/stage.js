var constants = require('./constants')

var renderer = PIXI.autoDetectRenderer(constants.WINDOW_WIDTH, constants.WINDOW_HEIGHT, {
  backgroundColor : 0x77404F
})

var stage = new PIXI.Container()
document.body.appendChild(renderer.view)

module.exports = {
  stage: stage,
  renderer: renderer
}
