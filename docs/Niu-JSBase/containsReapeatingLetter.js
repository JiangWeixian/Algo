function containsRepeatingLetter (str) {
  var reg = /([a-zA-Z])\1/
  return reg.test(str)
}

console.log(containsRepeatingLetter('rer'))
