'use strict';

function combineToMaxium(arr) {
  var strArr = arr.map(function (item) {
    return item.toString();
  });
  var sortedArr = strArr.sort(isBig);
  function isBig(a, b) {
    return a + b < b + a;
  }
  return sortedArr.join('');
}

console.log(combineToMaxium([12, 123]));