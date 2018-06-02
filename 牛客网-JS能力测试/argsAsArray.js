function callback (greeting, name, punctuation) {
  return greeting + ', ' + name + (punctuation || '!')
}

function argsAsArrayES6 (fn, arr) {
  return fn(...arr)
}

function argsAsArray (fn, arr) {
  return fn.apply(null, arr)
}

console.log(argsAsArrayES6(callback, ['Hello', 'Ellie', '!']))
console.log(argsAsArray(callback, ['Hello', 'Ellie', '!']))
