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

var recursiveFind = function recursiveFind(node, acc, lastPath, pathMap, target) {
  var nodeArr = [node.left, node.right];
  // 采用循环的方式是为了保证对于leftnode, rightnode使用相等lastpath
  for (var i = 0; i < nodeArr.length; i++) {
    var currentNode = nodeArr[i];
    // 递归边界条件是节点是否存在
    if (currentNode) {
      var currentAcc = acc + currentNode.value;
      var currentPath = lastPath + '-' + currentNode.value.toString();
      // 因为默认树中数值都是正数，所以如果找到了这条路径，就中止寻找进行下一步查找
      if (currentAcc === target) {
        pathMap.push(currentPath);
        continue;
      }
      // 如果没有找到继续查找
      recursiveFind(nodeArr[i], currentAcc, currentPath, pathMap, target);
    }
  }
};

var find = function find() {
  var path = [];
  return function (tree, target) {
    if (!tree) {
      return {};
    }
    // 传入初始数值和路径
    recursiveFind(tree, tree.value, tree.value.toString(), path, target);
    return path;
  };
};

var node1 = new Node(10);
var node2 = new Node(5);
var node3 = new Node(12);
var node4 = new Node(4);
var node5 = new Node(7);

var treeA = new Tree();
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
treeA.setHead(node1);
// 测试是否构建正确
treeA.preOrder(function (value) {
  console.log(value);
});

var finder = find();
console.log(finder(treeA.head, 22));