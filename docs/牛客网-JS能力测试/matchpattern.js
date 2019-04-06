function matchesPattern (str) {
  var reg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
  return reg.test(str)
}

console.log(matchesPattern('a800-555-1222'))
