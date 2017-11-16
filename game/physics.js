var Matter = require('matter-js')
var constants = require('./constants')

// Matter.js module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body

function PhysicsObject(xIn, yIn, scaleIn, r) {
  // create two boxes and a ground
  var x, y, scale
  x = xIn
  y = yIn
  r = r || 30
  scale = (Math.random() * scaleIn) + scaleIn
  var box = Bodies.rectangle(x, y, r)
  World.add(engine.world, [box])

  // bodies.push(box)
  return box
}

// create a Matter.js engine
var engine = Engine.create()
var bodies = []
var ground = Bodies.rectangle(
0, constants.WINDOW_HEIGHT, constants.WINDOW_WIDTH * 2, 60, { isStatic: true })
bodies.push(ground)

// add all of the bodies to the world
World.add(engine.world, bodies)

// run the engine
Engine.run(engine)

module.exports = {
  engine: engine,
  bodies: bodies,
  PhysicsObject: PhysicsObject
}
