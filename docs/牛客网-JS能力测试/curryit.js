function curryIt (fn) {
  var args = []
  return function (payload) {
    args = args.concat([payload])
    return function (payload) {
      args = args.concat([payload])
      return function (payload) {
        args = args.concat([payload])
        return fn.apply(null, args)
      }
    }
  }
}

function callback (a, b, c) {
  return a + b + c
}

console.log(curryIt(callback)(1)(2)(3))
