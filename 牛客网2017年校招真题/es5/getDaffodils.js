'use strict';

function getDaffodils(a, b) {
  var cached = Array(10).fill(null).map(function (item, index) {
    return Math.pow(index, 3);
  });
  var res = [];
  for (var i = a; i < b; i++) {
    var arr = i.toString().split('');
    var sum = arr.reduce(function (acc, value) {
      return acc + cached[value];
    }, 0);
    if (sum === i) {
      res.push(i);
    }
  }
  return res.length ? res.sort().join(' ') : 'no';
}
console.log(getDaffodils(100, 120));
console.log(getDaffodils(300, 380));