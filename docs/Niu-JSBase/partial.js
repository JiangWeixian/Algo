var sayIt = function (greeting, name, punctuation) {
  return greeting + ', ' + name + (punctuation || '!')
}

function partial (fn, str1, str2) {
  return function (str3) {
    return fn(str1, str2, str3)
  }
}

console.log(partial(sayIt, 'Hello', 'Ellie')('!!!'))
