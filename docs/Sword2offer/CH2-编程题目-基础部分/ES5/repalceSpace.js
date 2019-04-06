'use strict';

var replaceSpace = function replaceSpace(str, target) {
  return str.split(' ').join(target);
};

var str = 'We are happy';
console.log(replaceSpace(str, '%20'));