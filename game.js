
var Matter = require('matter-js')
var createRichText = require('./game/text')
var Head = require('./game/head')
var constants = require('./game/constants')
require('./game.scss')

var frameTicker = 0

// Matter.js module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies

// create a Matter.js engine
var engine = Engine.create()
// var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true })
var bodies = []
// bodies.push(ground)

var renderer = PIXI.autoDetectRenderer(constants.WINDOW_WIDTH, constants.WINDOW_HEIGHT, {
  backgroundColor : 0x77404F
})

var stage = new PIXI.Container()
document.body.appendChild(renderer.view)

var clickTxt = createRichText('Click the Fritz', constants.WINDOW_WIDTH / 2, 180)
var anykeyTxt = createRichText('Or press ANY key', constants.WINDOW_WIDTH / 2, 250)
stage.addChild(clickTxt)
stage.addChild(anykeyTxt)

function PhysicsObject() {
	// create two boxes and a ground
	var x, y, scale
	x = (Math.random() * constants.WINDOW_WIDTH) + 1
	y = (Math.random() * constants.WINDOW_HEIGHT) + 1
	scale = (Math.random() * 20) + 20
	var box = Bodies.rectangle(x, y, scale, scale)

	bodies.push(box)
	return box
}

var createBunny = function() {
	return {
		sprite: new SpriteObject(),
		body: new PhysicsObject()
	}
}

var fritz = new Head(stage)

// start animating
animate()
function animate() {
	requestAnimationFrame(animate)

	// for(var b in bunnies) {
  //   if (bunnies[b]) {
  // 		bunnies[b].sprite.position = bunnies[b].body.position
  // 		bunnies[b].sprite.rotation = bunnies[b].body.angle
  //
  //     if (bunnies[b].sprite.position.y > constants.WINDOW_HEIGHT + PADDING || bunnies[b].sprite.position.x > constants.WINDOW_WIDTH + PADDING) {
  //       stage.removeChild(bunnies[b])
  //       World.remove(engine.world, bunnies[b].body)
  //       bodies.splice(b, 1)
  //       bunnies.splice(b, 1)
  //     }
  //   }
	// }

  fritz.update();
	// render the container
	renderer.render(stage)
}

// add all of the bodies to the world
// World.add(engine.world, bodies)

// run the engine
// Engine.run(engine)
