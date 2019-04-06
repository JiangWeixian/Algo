function iterateES6 (obj) {
  var arr = []
  for (var ite in obj) {
    arr.push(ite + ': ' + obj[ite])
  }
  return arr
}

var C = function () {
  this.foo = 'bar'
  this.baz = 'bim'
}
C.prototype.bop = 'bip'
console.log(iterateES6(new C()))
