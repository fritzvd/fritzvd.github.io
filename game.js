require('./game.scss')
// require('./node_modules/pixi.js/dist/pixi.js')
// require pixi, it's not really working any other way so.. meh..
// 
var backgroundColors = require('./game/bgColors')
var LIST_OF_THINGS = require('./game/listofthings.json')
var item = 0

var Matter = require('matter-js')
var physics = require('./game/physics')
var createRichText = require('./game/text').createRichText
var Dialogue = require('./game/dialogue')
var Head = require('./game/head')
var constants = require('./game/constants')
var Thing = require('./game/thing')
var stage = require('./game/stage').stage
var renderer = require('./game/stage').renderer


// Matter.js module aliases
var Bodies = Matter.Bodies,
    Body = Matter.Body

// aliases for physics
var PhysicsObject = physics.PhysicsObject,
    bodies = physics.bodies

var scale = constants.WINDOW_WIDTH / 960.0

var dialogue = new Dialogue(constants.WINDOW_WIDTH * 0.4, constants.WINDOW_HEIGHT * 0.4, 20, {
  wordWrapWidth: constants.WINDOW_WIDTH * 0.4 - 40
})
stage.addChild(dialogue.sprite)
dialogue.hide()

var clickTxt = createRichText(
  'Press ANY key\nOr click on Fritz\n\nArrows adjust Fritz\' speed\n'
  + 'You can click on the dialogue that appears',
  constants.WINDOW_WIDTH / 2 - 200 * scale, 10 * scale,
  {},
  scale
)
document.querySelector('#help-button').onclick = function () {
  clickTxt.alpha = 1.0
  setTimeout(function () {
    clickTxt.alpha = 0.0
  }, 5000)
}

stage.addChild(clickTxt)


function resize () {
  location.reload()
}

var things = []
var fritz = new Head(things)

function openDialogue (thing) {
  dialogue.show(thing)
}

var onButtonDown = function (e) {
  var randomInt = parseInt(Math.random() * backgroundColors.length)
  renderer.backgroundColor = backgroundColors[randomInt]

  fritz.onButtonDown(e);
  if (LIST_OF_THINGS.length > 0) {
    item++;
    if (item === LIST_OF_THINGS.length) {
      item = 0;
    }
    var newThing = new Thing(
      LIST_OF_THINGS[item], fritz.x, fritz.y)
    openDialogue(newThing)
    newThing.sprite
        .on('mousedown', openDialogue, self)
        .on('touchstart', openDialogue, self)
    stage.addChild(newThing.sprite)
    things.push(newThing)
  }
}


// bind events
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      fritz.move.call(fritz, e.keyCode)
    } else {
      onButtonDown(e)
    }
    e.preventDefault();
}, false);

window.addEventListener('resize', resize)

fritz.sprite
  .on('mousedown', onButtonDown, fritz)
  .on('touchstart', onButtonDown, fritz)

stage.addChild(fritz.sprite)

// start animating
animate()
function animate() {
	requestAnimationFrame(animate)

  if (clickTxt.alpha > 0) {
    clickTxt.fade()
  }

	for(var b in things) {
    things[b].update()
    if (things[b].sprite.position.y > constants.WINDOW_HEIGHT) {
      things[b].remove(stage, physics.engine.world)
      things.splice(things.indexOf(things[b]), 1)
    }
	}
  fritz.update()
	// render the container
	renderer.render(stage)
}
