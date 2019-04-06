function containsNumber (str) {
  var numReg = /[0-9]/
  return numReg.test(str)
}

console.log(containsNumber('abc'))
