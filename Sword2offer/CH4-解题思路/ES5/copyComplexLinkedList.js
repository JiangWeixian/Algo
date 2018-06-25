'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
  _classCallCheck(this, Node);

  this.value = value;
  this.next = null;
  this.slibing = null;
};

var LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
  }

  _createClass(LinkedList, [{
    key: 'setHead',
    value: function setHead(node) {
      this.head = node;
    }
  }, {
    key: 'show',
    value: function show() {
      var current = this.head;
      while (current) {
        console.log('current', current.value);
        if (current.slibing) {
          console.log('slibing', current.slibing.value);
        }
        current = current.next;
      }
    }
  }]);

  return LinkedList;
}();

var copy = function copy(listA, listB) {
  var current = listA.head;
  while (current) {
    var cloneNode = new Node(current.value);
    var nextNode = current.next;
    current.next = cloneNode;
    cloneNode.next = nextNode;
    current = current.next.next;
  }
  current = listA.head;
  while (current) {
    if (current.slibing) {
      var slibNode = current.slibing;
      var cloneSlibNode = slibNode.next;
      var _cloneNode = current.next;
      _cloneNode.slibing = cloneSlibNode;
    }
    current = current.next.next;
  }
  current = listA.head;
  listB.setHead(current.next);
  while (current) {
    var _cloneNode2 = current.next;
    var _nextNode = _cloneNode2.next;
    current.next = _nextNode;
    if (_nextNode) {
      _cloneNode2.next = _nextNode.next;
    } else {
      _cloneNode2.next = null;
    }
    current = current.next;
  }
};

var nodeA = new Node('A');
var nodeB = new Node('B');
var nodeC = new Node('C');
var nodeD = new Node('D');
var nodeE = new Node('E');

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

nodeA.slibing = nodeC;
nodeB.slibing = nodeE;
nodeD.slibing = nodeB;

var linkedListOrigin = new LinkedList();
linkedListOrigin.setHead(nodeA);
var linkedListClone = new LinkedList();
copy(linkedListOrigin, linkedListClone);
linkedListClone.show();