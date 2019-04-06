function callback () {
  return this.greeting + ', ' + this.name + '!!!'
}

function speak (fn, obj) {
  return fn.call(obj)
}

console.log(speak(callback, {greeting: 'Hello', name: 'Rebecca'}))
