var EventedArray = require('../game/evented-array')
var tape = require('tape')

tape('EventedArray testing', function (t) {
  t.plan(2)

  var ea = new EventedArray()
  console.log(ea)
  t.equal(ea.hasOwnProperty('on'), true)

})
