let exchange = (arr) => {
  let start = 0,
    end = arr.length - 1
  function isOdd (value) {
    return value % 2 !== 0
  }
  function isEven (value) {
    return value % 2 === 0
  }
  while (start <= end) {
    // start指向偶数
    while (isOdd(arr[start])) {
      start += 1
    }
    while (isEven(arr[end])) {
      end -= 1
    }
    // 奇数偶数全部交换下顺序。
    // 即使start指向了后面的偶数也是在奇数后面了
    if (start <= end) {
      let tmp = arr[start]
      arr[start] = arr[end]
      arr[end] = tmp
      start += 1
      end -= 1
    }
  }
}

let array = [1, 2, 5, 7, 8, 4]
exchange(array)
console.log(array)
array = [2, 2, 2, 1, 1, 1]
exchange(array)
console.log(array)
