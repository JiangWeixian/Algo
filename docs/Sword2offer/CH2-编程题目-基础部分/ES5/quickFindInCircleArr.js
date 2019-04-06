"use strict";

var quickFindMin = function quickFindMin(arr) {
  var start = 0;
  var end = arr.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2),
        midValue = arr[mid];
    if (midValue > arr[start]) {
      start = mid + 1;
    } else if (midValue < arr[end]) {
      end = mid;
    } else if (start !== end && midValue === arr[end] && midValue === arr[start]) {
      for (var i = start; i < end; i++) {
        if (arr[i] > arr[i + 1]) {
          return arr[i + 1];
        }
      }
    } else {
      return midValue;
    }
  }
};
var arr = [3, 4, 5, 1, 2];
console.log(quickFindMin(arr));
arr = [1, 0, 1, 1, 1];
console.log(quickFindMin(arr));