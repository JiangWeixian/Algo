// 定义log&singleton实现业务分离
let log = function (name) {
  this.name = name
}

let singleton = function () {
  let instance
  return function (args) {
    if (!instance) {
      instance = new log(args)
      return instance
    }
    return instance
  }
}

let creator = singleton()
let moduleA = creator('module-a')
let moduleB = creator('module-b')
let anotherCreator = singleton()
let moduleC = anotherCreator('module-C')
let moduleD = anotherCreator('module-D')

// 测试singleton能够成功
console.log(moduleA.name)
console.log(moduleB.name)
console.log(moduleA === moduleB)
// 测试singleton能否重复利用
console.log(moduleC.name)
console.log(moduleD.name)
console.log(moduleC === moduleD)
console.log(moduleA.name)
console.log(moduleB.name)
console.log(moduleA === moduleB)
