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
  this.print = function () {
    var current = head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  };
  this.getHead = function () {
    return head;
  };
  this.merge = function (listA, listB) {
    if (!listA && !listB) {
      return;
    }
    if (!listA && listB) {
      head = listB;
      return;
    }
    if (!listB && listA) {
      head = listA;
      return;
    }
    var currentA = listA;
    var currentB = listB;
    var current = void 0;
    while (currentA && currentB) {
      if (currentA.value < currentB.value) {
        if (!head) {
          head = currentA;
          current = head;
        } else {
          current.next = currentA;
          current = current.next;
        }
        currentA = currentA.next;
      } else {
        if (!head) {
          head = currentB;
          current = head;
        } else {
          current.next = currentB;
          current = current.next;
        }
        currentB = currentB.next;
      }
    }

    if (currentA) {
      current.next = currentA;
      current = current.next;
      currentA = currentA.next;
    }
    if (currentB) {
      current.next = currentB;
      current = current.next;
      currentB = currentB.next;
    }
  };
};

var linkedListA = new LinkedList();
linkedListA.push(1);
linkedListA.push(3);
linkedListA.push(5);
linkedListA.push(7);
var linkedListB = new LinkedList();
linkedListB.push(2);
linkedListB.push(4);
linkedListB.push(6);
linkedListB.push(8);
var linkedList = new LinkedList();
linkedList.merge(linkedListA.getHead(), linkedListB.getHead());
linkedList.print();
//# sourceMappingURL=mergeLinkedList.js.map