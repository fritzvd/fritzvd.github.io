var LIST_OF_THINGS = require('./game/listofthings.json')
var item = 0

var Matter = require('matter-js')
var createRichText = require('./game/text')
var Head = require('./game/head')
var constants = require('./game/constants')
var Thing = require('./game/thing')
require('./game.scss')

var frameTicker = 0

// Matter.js module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body

// create a Matter.js engine
var engine = Engine.create()
var ground = Bodies.rectangle(
  0, constants.WINDOW_HEIGHT, constants.WINDOW_WIDTH, 60, { isStatic: true })
var bodies = []
bodies.push(ground)

var renderer = PIXI.autoDetectRenderer(constants.WINDOW_WIDTH, constants.WINDOW_HEIGHT, {
  backgroundColor : 0x77404F
})

var stage = new PIXI.Container()
document.body.appendChild(renderer.view)

var clickTxt = createRichText('Click the Fritz', constants.WINDOW_WIDTH / 2, 180)
var anykeyTxt = createRichText('Or press ANY key', constants.WINDOW_WIDTH / 2, 250)
stage.addChild(clickTxt)
stage.addChild(anykeyTxt)

function PhysicsObject(xIn, yIn, scaleIn) {
	// create two boxes and a ground
	var x, y, scale
  x = xIn
  y = yIn
	scale = (Math.random() * scaleIn) + scaleIn
	var box = Bodies.circle(x, y, 30)
  World.add(engine.world, [box])

	// bodies.push(box)
	return box
}

var things = []
var fritz = new Head(things)
fritz.body = new PhysicsObject(fritz.x, fritz.y, 50)
World.add(engine.world, fritz.body)

var onButtonDown = function (e) {
  fritz.onButtonDown(e);
  if (LIST_OF_THINGS.length > 0) {
    var phys = new PhysicsObject(fritz.x, fritz.y, 50)
    var xDir = (Math.random() < 0.5) ? -1 : 1
    Body.setVelocity(phys, {x: 10 * xDir, y: -4})
    item++;
    if (item === LIST_OF_THINGS.length) {
      item = 0;
    }
    var newThing = new Thing(
      LIST_OF_THINGS[item], fritz.x, fritz.y, phys)
    stage.addChild(newThing.sprite)
    things.push(newThing)
  }
}

fritz.sprite
  .on('mousedown', onButtonDown, fritz)
  .on('touchstart', onButtonDown, fritz)

stage.addChild(fritz.sprite)

// start animating
animate()
function animate() {
	requestAnimationFrame(animate)

	for(var b in things) {
		things[b].sprite.position = things[b].body.position
		things[b].sprite.rotation = things[b].body.angle
	}

  fritz.update()
	// render the container
	renderer.render(stage)
}

// add all of the bodies to the world
World.add(engine.world, bodies)

// run the engine
Engine.run(engine)
