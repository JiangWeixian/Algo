var C = function (name) {
  this.name = name
  return this
}

var obj1 = new C('Rebecca')

function alterObjects (constructor, greeting) {
  constructor.prototype.greeting = greeting
}

alterObjects(C, 'What\'s up')
console.log(obj1.greeting)
