'use strict';

// 定义log&singleton实现业务分离
var log = function log(name) {
  this.name = name;
};

var singleton = function singleton() {
  var instance = void 0;
  return function (args) {
    if (!instance) {
      instance = new log(args);
      return instance;
    }
    return instance;
  };
};

var creator = singleton();
var moduleA = creator('module-a');
var moduleB = creator('module-b');
var anotherCreator = singleton();
var moduleC = anotherCreator('module-C');
var moduleD = anotherCreator('module-D');

// 测试singleton能够成功
console.log(moduleA.name);
console.log(moduleB.name);
console.log(moduleA === moduleB);
// 测试singleton能否重复利用
console.log(moduleC.name);
console.log(moduleD.name);
console.log(moduleC === moduleD);
console.log(moduleA.name);
console.log(moduleB.name);
console.log(moduleA === moduleB);