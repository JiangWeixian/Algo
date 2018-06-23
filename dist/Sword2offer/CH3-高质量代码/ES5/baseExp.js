"use strict";

var exp = function exp() {
  var cached = {};
  function baseExp(base, expo) {
    if (base === 0) {
      return 0;
    }
    if (expo === 0) {
      return 1;
    }
    var result = 1;
    for (var i = 1; i <= Math.abs(expo); i++) {
      // 进行了空间换时间的处理
      if (cached[base + "-" + i]) {
        result = cached[base + "-" + i];
      } else {
        result *= base;
        cached[base + "-" + i] = result;
      }
    }
    return expo < 0 ? 1 / result : result;
  }
  return function (base, expo) {
    if (cached[base + "-" + expo]) {
      return cached[base + "-" + expo];
    } else {
      return baseExp(base, expo);
    }
  };
};

var exptor = exp();
// 功能测试
console.log(exptor(2, 3));
console.log(exptor(2, -3));
// 边界测试
console.log(exptor(2, 0));
console.log(exptor(0, 0));
//# sourceMappingURL=baseExp.js.map