// 根据根节点划分左右数组
let splitLR = (arr) => {
  let root = arr[arr.length - 1]
  // 找到第一个大于根节点的数字，就是划分左右树的标志
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > root) {
      return i
    }
  }
}

/*
 * 只检查数字为三个的数组
 * 最后一个元素为根节点
 * 根据左边节点小于根节点，右边大于根节点来判断是不是BST
 */
let isBST = (arr) => {
  let root = arr[arr.length - 1]
  if (arr[0] < root && arr[1] > root) {
    return true
  }
  return false
}

let recursiveCheck = (arr) => {
  let result = false
  if (arr.length > 3) {
    let mid = splitLR(arr)
    if (mid > 0) {
      result = recursiveCheck(arr.slice(0, mid))
      // 如果其中一个子结构不是bst，那么整个就不是bst
      if (result === false) {
        return result
      }
    }
    if (mid < arr.length) {
      // 注意不要包含根节点
      result = recursiveCheck(arr.slice(mid, arr.length - 1))
      // 同上
      if (result === false) {
        return result
      }
    }
  }
  if (arr.length === 3) {
    result = isBST(arr)
    return result
  }
  // 2个元素或者1个元素的数组一定可以构成bst
  if (arr.length < 3) {
    return true
  }
  return result
}

let check = (arr) => {
  // 小于3个的数组一定可以构成bst
  if (!Array.isArray(arr) || arr.length < 2) {
    return true
  }
  return recursiveCheck(arr)
}

let arr = [5, 7, 6, 9, 11, 10, 8]
let anotherArr = [7, 4, 6, 5]
let eadgeArr = [4, 7, 6]
console.log(check(arr))
console.log(check(anotherArr))
console.log(check(eadgeArr))
