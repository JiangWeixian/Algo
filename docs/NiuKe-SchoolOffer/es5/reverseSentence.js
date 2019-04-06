'use strict';

function reverseSentence(str) {
  var arr = str.split(' ');
  var word = '';
  var rArr = [];
  while (word = arr.pop()) {
    rArr.push(word);
  }
  return rArr.join(' ');
}

console.log(reverseSentence('hello xiao mi'));