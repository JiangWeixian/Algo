function Stack () {
  let items = []
  this.push = (value) => {
    items.push(value)
  }
  this.pop = () => {
    return items.pop()
  }
  this.top = () => {
    return items[items.length - 1]
  }
  this.isEmpty = () => {
    return items.length === 0
  }
  this.size = () => {
    return items.length
  }
  this.clear = () => {
    items = []
  }
  this.show = () => {
    console.log(items)
  }
}

let check = (inPath, outPath) => {
  let stack = new Stack()
  // 压入inpath元素
  while (inPath.length) {
    stack.push(inPath.shift())
    // 如果和弹出对应,就pop
    if (stack.top() === outPath[0]) {
      stack.pop()
      outPath.shift()
    }
  }
  // 如果stack不为空, 继续和outpath检测
  while (!stack.isEmpty()) {
    // 只要有一个不相等,就要是false
    if (stack.top() !== outPath[0]) {
      return false
    }
    stack.pop()
    outPath.shift()
  }
  return true
}

let inArr = [1, 2, 3, 4, 5]
let outArr = [4, 5, 3, 2, 1]
// 由于直接使用了shift会修改原数组,所以重新创建了一份
let inArr2 = [1, 2, 3, 4, 5]
let outArr2 = [4, 3, 5, 1, 2]
console.log(check(inArr, outArr))
console.log(check(inArr2, outArr2))
