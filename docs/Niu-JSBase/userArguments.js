function useArgumentsES6 () {
  return arguments[0].reduce(function (acc, value) {
    return acc + value
  })
}

function useArguments () {
  var sum = 0
  for (var i = 0; i < arguments[0].length; i++) {
    sum += arguments[0][i]
  }
  return sum
}

console.log(useArgumentsES6([1, 2, 3]))
console.log(useArguments([1, 2, 3]))
