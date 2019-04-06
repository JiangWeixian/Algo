function endsWithVowel (str) {
  var reg = /[a|e|i|o|u]$/i
  return reg.test(str)
}

console.log(endsWithVowel('a'))
