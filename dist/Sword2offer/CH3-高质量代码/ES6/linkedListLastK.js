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
  this.lastK = function (k) {
    if (!head) {
      return null;
    }
    var start = head,
        end = head;
    for (var i = 0; i < k; i++) {
      end = end.next;
      if (!end && i !== k - 1) {
        return null;
      }
    }
    if (!end) {
      return start;
    }
    while (end) {
      end = end.next;
      start = start.next;
    }
    return start;
  };
};

var linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
// 超出边界情况
console.log(linkedList.lastK(5));
// 边界情况
console.log(linkedList.lastK(4));
// 功能测试
console.log(linkedList.lastK(1));
console.log(linkedList.lastK(2));
//# sourceMappingURL=linkedListLastK.js.map