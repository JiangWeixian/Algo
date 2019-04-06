function base10 (str) {
  let num = str.split('')
  let sum = num.reduce(function (acc, value, index) {
    return acc + Math.pow(2, num.length - index - 1) * (value - 0)
  }, 0)
  return sum
}

console.log(base10('11000000'))
