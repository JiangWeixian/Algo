/**
 * 可类比大整数相加实现，注意10要进1
 */

/** 
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let currentL1 = l1
    let currentL2 = l2
    let c = 0
    let head
    let current

    while (currentL1 && currentL2) {
      c += currentL1.val + currentL2.val
      let currentC = c >= 10? (c - 10):c
      c = Number(c >= 10)
      if (!head) {
        head = new ListNode(currentC)
        current = head
      } else {
        current.next = new ListNode(currentC)
        current = current.next
      }
      currentL1 = currentL1.next
      currentL2 = currentL2.next
    }
    let remain = currentL1 || currentL2
    while (remain) {
      c += remain.val
      let currentC = c >= 10? (c - 10):c
      c = Number(c >= 10)
      current.next = new ListNode(currentC)
      current = current.next
      remain = remain.next
    }
    if (c) {
      current.next = new ListNode(c)
    }
    return Link2list(head)
};

var Link2list = function (head) {
  let current = head
  let list = []
  while (current) {
    list.push(current.val)
    current = current.next
  }
  return list
}

// const l1 = new ListNode(2)
// const l1n = new ListNode(4)
// const l1nn = new ListNode(3)
// l1.next = l1n
// l1n.next = l1nn

// const l2 = new ListNode(5)
// const l2n = new ListNode(6)
// const l2nn = new ListNode(4)
// const l2nnn = new ListNode(3)
// l2.next = l2n
// l2n.next = l2nn

// addTwoNumbers(l1, l2)

const l1 = new ListNode(5)

const l2 = new ListNode(5)

console.log(addTwoNumbers(l1, l2))