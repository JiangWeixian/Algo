function callback (x) {
  return x * x
}

function makeClosuresES6 (arr, fn) {
  let closures = arr.map(function (ele) {
    return function () {
      return fn(ele)
    }
  })
  return closures
}

function makeClosures (arr, fn) {
  var closures = arr.map(function (ele) {
    return function () {
      return fn(ele)
    }
  })
  return closures
}

console.log(makeClosuresES6([1, 2, 3], callback)[0]())
console.log(makeClosures([1, 2, 3], callback)[0]())
