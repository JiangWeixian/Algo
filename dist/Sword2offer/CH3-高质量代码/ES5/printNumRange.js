'use strict';

var range = function range() {
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  function getRange(n) {
    if (n === 1) {
      return nums;
    }
    var currentCount = n - 1;
    var currentRange = [];
    if (n >= 1) {
      var lastRange = getRange(currentCount);
      currentRange = nums.map(function (pre) {
        return lastRange.map(function (tail) {
          return pre + tail;
        });
      });
      currentRange = currentRange.reduce(function (acc, value) {
        return acc.concat(value);
      });
    }
    return currentRange;
  }
  return function (n) {
    return getRange(n);
  };
};

var ranger = range();
console.log(ranger(3));
//# sourceMappingURL=printNumRange.js.map