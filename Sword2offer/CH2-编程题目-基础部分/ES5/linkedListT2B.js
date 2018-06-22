'use strict';

var LinkedList = function LinkedList() {
  var head = null;
  var Item = function Item(value) {
    this.value = value;
    this.next = null;
  };
  function rPrint(root, callback) {
    if (root) {
      if (root.next) {
        rPrint(root.next, callback);
      }
      callback(root.value);
    }
  }
  this.push = function (value) {
    if (!head) {
      head = new Item(value);
    } else {
      var item = new Item(value),
          current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = item;
    }
  };
  this.reversePrint = function (callback) {
    if (!head) {
      callback('it is empty');
    }
    rPrint(head, callback);
  };
};

var linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.reversePrint(function (value) {
  console.log(value);
});