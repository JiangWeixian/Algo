'use strict';

function neckLace(str) {
  var arr = str.split('');
  var start = 0;
  var Node = function Node(value, next) {
    this.index = value;
    this.next = next;
  };
  var items = [];
  var lens = [];
  function createLace(arr) {
    arr.forEach(function (item, index) {
      var node = new Node(index, index + 1);
      items.push(node);
    });
  }
  function inQueen(queenList, value) {
    return queenList.indexOf(value);
  }
  if (arr.length <= 5) {
    return 0;
  }
  createLace(arr);
  items[items.length - 1].next = 0;
  while (start < arr.length) {
    var queen = ['A', 'B', 'C', 'D', 'E'];
    if (inQueen(queen, arr[start]) < 0) {
      start += 1;
    } else {
      var currentNode = items[start];
      while (currentNode.next !== start) {
        var t = inQueen(queen, arr[currentNode.index]);
        if (t >= 0) {
          queen.splice(t, 1);
        }
        if (queen.length === 0) {
          lens.push([start, currentNode.index]);
          break;
        }
        currentNode = items[currentNode.next];
      }
      if (currentNode.next === start) {
        var _t = inQueen(queen, arr[currentNode.index]);
        if (_t >= 0) {
          queen.splice(_t, 1);
        }
        if (queen.length === 0) {
          lens.push([start, currentNode.index]);
        }
      }
      start += 1;
    }
  }
  if (lens.length === 0) {
    return 0;
  }
  lens = lens.map(function (value) {
    var len = Math.abs(value[1] - value[0]) === 1 || Math.abs(value[1] - value[0]) === arr.length - 1 ? 0 : Math.abs(value[1] - value[0]) - 1;
    return len;
  });
  return Math.max.apply(this, lens);
}

console.log(neckLace('ABCYDYE'));
console.log(neckLace('ATTMBQECPD'));