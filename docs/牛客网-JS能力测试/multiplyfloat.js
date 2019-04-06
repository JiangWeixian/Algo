function multiply (a, b) {
  var alen = a.toString().split('.')
  var blen = b.toString().split('.')
  var amul = alen.length === 1 ? 1 : Math.pow(10, alen[1].length)
  var bmul = blen.length === 1 ? 1 : Math.pow(10, blen[1].length)
  return amul * bmul * a * b / (amul * bmul)
}

console.log(multiply(3, 0.001))
