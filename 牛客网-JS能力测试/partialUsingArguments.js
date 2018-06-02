function partialUsingArguments (fn) {
  this.arguments = arguments
  var result = function () {
    return fn(Array.prototype.concat.apply(Array.prototype.slice.call(this.arguments[1], 0), Array.prototype.slice.call(arguments[0], 0)))
  }
  return result
}

function callback () {
  return arguments
}

console.log(partialUsingArguments(callback, [1, 2, 3])([4, 5, 6]))
