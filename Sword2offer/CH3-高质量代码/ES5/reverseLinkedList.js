"use strict";

var LinkedList = function LinkedList() {
  var head = null;
  var Item = function Item(value) {
    this.value = value;
    this.next = null;
  };
  this.push = function (value) {
    if (!head) {
      head = new Item(value);
    } else {
      var item = new Item(value),
          current = head;
      // 找到末尾节点
      while (current.next) {
        current = current.next;
      }
      current.next = item;
    }
  };
  this.getHead = function () {
    return head;
  };
};

var reverse = function reverse() {
  var tail = null;
  var reverseLinkedlist = function reverseLinkedlist(root) {
    if (root) {
      if (root.next) {
        var nextNode = reverseLinkedlist(root.next);
        nextNode.next = root;
        return root;
      } else {
        tail = root;
        return root;
      }
    }
  };
  return function (root) {
    reverseLinkedlist(root);
    root.next = null;
    return tail;
  };
};

var linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
var reverseor = reverse();
var rLinkedList = reverseor(linkedList.getHead());
while (rLinkedList) {
  console.log(rLinkedList.value);
  rLinkedList = rLinkedList.next;
}