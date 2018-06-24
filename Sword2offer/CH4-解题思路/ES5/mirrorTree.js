'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rPreOrder = Symbol('preorder');
var rMirror = Symbol('rMirror');

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
    key: rMirror,
    value: function value(root) {
      if (root) {
        var leftNode = null,
            rightNode = null;
        if (root.left) {
          leftNode = this[rMirror](root.left);
        }
        if (root.right) {
          rightNode = this[rMirror](root.right);
        }
        var tmp = leftNode;
        root.left = rightNode;
        root.right = tmp;
        return root;
      }
      return null;
    }
  }, {
    key: 'mirror',
    value: function mirror() {
      if (!this.head) {
        return null;
      }
      this[rMirror](this.head);
    }
  }, {
    key: 'getHead',
    get: function get() {
      return this.head;
    }
  }]);

  return Tree;
}();

var node1 = new Node(8);
var node2 = new Node(6);
var node3 = new Node(10);
var node4 = new Node(5);
var node5 = new Node(7);
var node6 = new Node(9);
var node7 = new Node(11);

var treeA = new Tree();
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
treeA.setHead(node1);
// 测试是否构建正确
treeA.preOrder(function (value) {
  console.log(value);
});
treeA.mirror();
console.log('镜像测试');
treeA.preOrder(function (value) {
  console.log(value);
});