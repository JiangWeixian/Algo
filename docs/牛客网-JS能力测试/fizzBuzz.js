function fizzBuzz (num) {
  function divisibleBy (num, div) {
    return num % div === 0
  }
  if (Object.prototype.toString.call(num) === '[object Number]') {
    var divisibleBytri = divisibleBy(num, 3),
      divisibleByFri = divisibleBy(num, 5)
    if (divisibleByFri && divisibleBytri) {
      return 'fizzbuzz'
    }
    if (divisibleByFri && !divisibleBytri) {
      return 'buzz'
    }
    if (divisibleBytri && !divisibleByFri) {
      return 'fuzz'
    }
    if (!divisibleByFri && !divisibleBytri) {
      return num
    }
  } else {
    return false
  }
}

console.log(fizzBuzz(null))
