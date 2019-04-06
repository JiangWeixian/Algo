function neckLace (str) {
  let arr = str.split('')
  let start = 0
  let Node = function (value, next) {
    this.index = value
    this.next = next
  }
  let items = []
  let lens = []
  function createLace (arr) {
    arr.forEach((item, index) => {
      let node = new Node(index, index + 1)
      items.push(node)
    })
  }
  function inQueen (queenList, value) {
    return queenList.indexOf(value)
  }
  if (arr.length <= 5) {
    return 0
  }
  createLace(arr)
  items[items.length - 1].next = 0
  while (start < arr.length) {
    let queen = ['A', 'B', 'C', 'D', 'E']
    if (inQueen(queen, arr[start]) < 0) {
      start += 1
    } else {
      let currentNode = items[start]
      while (currentNode.next !== start) {
        let t = inQueen(queen, arr[currentNode.index])
        if (t >= 0) {
          queen.splice(t, 1)
        }
        if (queen.length === 0) {
          lens.push([start, currentNode.index])
          break
        }
        currentNode = items[currentNode.next]
      }
      if (currentNode.next === start) {
        let t = inQueen(queen, arr[currentNode.index])
        if (t >= 0) {
          queen.splice(t, 1)
        }
        if (queen.length === 0) {
          lens.push([start, currentNode.index])
        }
      }
      start += 1
    }
  }
  if (lens.length === 0) {
    return 0
  }
  lens = lens.map((value) => {
    let len = Math.abs(value[1] - value[0]) === 1 || Math.abs(value[1] - value[0]) === arr.length - 1
      ? 0
      : Math.abs(value[1] - value[0]) - 1
    return len
  })
  return Math.max.apply(this, lens)
}

console.log(neckLace('ABCYDYE'))
console.log(neckLace('ATTMBQECPD'))
