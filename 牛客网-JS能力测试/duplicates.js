function duplicates (arr) {
  var sortedArr = arr.sort(),
    dupEle = []
  sortedArr.forEach(function (ele, index, arr) {
    if (arr[index + 1] === ele) {
      if (dupEle.indexOf(arr[index + 1]) === -1) {
        dupEle.push(arr[index + 1])
      }
    }
  })
  return dupEle
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]))

function duplicatesES6 (arr) {
  let sortedArr = arr.sort()
  let dupIndex = []
  sortedArr.forEach(function (ele, index, arr) {
    if (arr[index + 1] === ele) {
      dupIndex.push(arr[index + 1])
    }
  })
  return [...new Set(dupIndex)]
}

console.log(duplicatesES6([1, 2, 4, 4, 3, 3, 1, 5, 3]))
