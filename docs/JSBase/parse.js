var object = {
  b: { c: 4 }, d: [{ e: 5 }, { e: 6 }], f: 6
}

function curParse (obj, params) {
  var result = obj
  params.forEach(function (item) {
    if (item.indexOf('[') > -1) {
      var start = item.indexOf('[')
      var end = item.indexOf(']')
      var index = item.split('').slice(start + 1, end).join('')
      item = item.split('').slice(0, start).join('')
      result = curParse(result, [item, index])
    } else {
      result = result[item]
    }
  })
  return result
}

function parse (obj, str) {
  var result = curParse(obj, str.split('.'))
  console.log(result)
  return result
}

console.log(parse(object, 'b.c') === 4) // true
console.log(parse(object, 'd[0].e') === 5) // true
// console.log( parse(object, ‘d.0.e’) == 5 ) //true
// console.log( parse(object, ‘d[1].e’) == 6 ) //true
// console.log( parse(object, ‘d.1.e’) == 6 ) //true
console.log(parse(object, 'f') === 6) // true
