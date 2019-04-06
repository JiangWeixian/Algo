'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rPreOrder = Symbol('preorder');

var Node = function Node(value) {
  _classCallCheck(this, Node);

  this.value = value;
  this.left = null;
  this.right = null;
};

var Tree = function () {
  function Tree() {
    _classCallCheck(this, Tree);

    this.head = null;
  }

  _createClass(Tree, [{
    key: 'setHead',
    value: function setHead(node) {
      this.head = node;
    }
  }, {
    key: rPreOrder,
    value: function value(node, callback) {
      callback(node.value);
      if (node.left) {
        this[rPreOrder](node.left, callback);
      }
      if (node.right) {
        this[rPreOrder](node.right, callback);
      }
    }
  }, {
    key: 'preOrder',
    value: function preOrder(callback) {
      if (!this.head) {
        return null;
      }
      this[rPreOrder](this.head, callback);
    }
  }, {
    key: 'getHead',
    get: function get() {
      return this.head;
    }
  }]);

  return Tree;
}();

var compare = function compare(treeA, treeB) {
  // 注意递归的原子性，如果子结构相等。一直返回的是true
  // 原因在于B一定先比A到达末尾
  if (!treeB) {
    return true;
  }
  // 只要有一个是false，整个递归树结构就是false
  if (!treeA) {
    return false;
  }
  if (treeA.value !== treeB.value) {
    return false;
  }

  return compare(treeA.left, treeB.left) && compare(treeA.right, treeB.right);
};

var has = function has(treeA, treeB) {
  var result = false;
  if (treeA && treeB) {
    // 和B根节点相等才有继续的可能
    if (treeA.value === treeB.value) {
      result = compare(treeA, treeB);
    }
    // 如果result=true代表找到了，就不用继续下去寻找了
    if (!result) {
      result = has(treeA.left, treeB);
    }
    if (!result) {
      result = has(treeA.right, treeB);
    }
  }
  return result;
};

var node1 = new Node(8);
var node2 = new Node(8);
var node3 = new Node(7);
var node4 = new Node(9);
var node5 = new Node(2);
var node6 = new Node(4);
var node7 = new Node(7);

var treeA = new Tree();
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node5.left = node6;
node5.right = node7;
treeA.setHead(node1);
// 测试是否构建正确
// treeA.preOrder(function (value) {
//   console.log(value)
// })

var node8 = new Node(8);
var node9 = new Node(9);
var node10 = new Node(2);
var treeB = new Tree();
node8.left = node9;
node8.right = node10;
treeB.setHead(node8);
// 测试是否构建正确
// treeB.preOrder(function (value) {
//   console.log(value)
// })
console.log(has(treeA.getHead, treeB.getHead));