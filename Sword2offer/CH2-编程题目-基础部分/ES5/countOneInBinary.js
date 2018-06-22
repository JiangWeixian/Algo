'use strict';

var countOne = function countOne(num) {
  var bin = num.toString(2);
  var count = 0;
  bin.split('').forEach(function (item) {
    if (item === '1') {
      count += 1;
    }
  });
  return count;
};

console.log(countOne(9));