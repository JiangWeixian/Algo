function functionFunction (str) {
  function callback (params) {
    return str + ', ' + params
  }
  return callback
}

console.log(functionFunction('Hello')('world'))
