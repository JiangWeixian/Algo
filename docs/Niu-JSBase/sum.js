function sum (arr) {
  return arr.reduce(function (acc, value) {
    return acc + value
  })
}

console.log(sum([1, 2, 3]))

