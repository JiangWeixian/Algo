"use strict";

function sequenceSum(base, num) {
  var sumArr = [base];
  var sum = 0;
  if (num >= 2) {
    Array(num - 1).fill(0).forEach(function (item, index) {
      var pre = sumArr[index];
      sumArr.push(Math.sqrt(pre));
    });
  }
  sum = sumArr.reduce(function (acc, value) {
    return acc + value;
  });
  return sum.toFixed(2);
}

console.log(sequenceSum(81, 4));
console.log(sequenceSum(2, 2));