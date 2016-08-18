function EventedArray (init) {
  this._array = (init) ? init : []
  this.listeners = {}
  return _array
}

EventedArray.prototype.on = function (string, fn) {
  if (this.listeners[string].prototype === Array) {
    this.listeners[string].push(fn)
  } else {
    this.listeners[string] = [fn]
  }
}

EventedArray.prototype.push = function (item) {
  this._array.push(item)

  this.listeners.push.forEach(function (fn) {
    fn(item)
  })
}


module.exports = eventedArray
