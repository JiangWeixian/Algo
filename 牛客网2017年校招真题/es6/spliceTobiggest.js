function splice2Big (num, count) {
  let str = num.toString()
  let arr = str.split('')
  let remain = []
  let remove = []
  for (let i = 0; i < str.length - 1; i++) {
    if (arr[i] >= arr[i + 1] || remove.length >= count) {
      remain.push(arr[i])
    }
    if (arr[i] < arr[i + 1] && remove.length < count) {
      remove.push(arr[i])
    }
  }
  remain.push(arr[arr.length - 1])
  if (remove.length < count) {
    remain.splice(remain.length - 1 - (count - remove.length - 1), count - remove.length)
  }
  return remain.join('')
}

console.log(splice2Big(325, 1))
console.log(splice2Big(5175873, 2))
console.log(splice2Big(888788, 2))
console.log(splice2Big(888887, 2))
console.log(splice2Big(787878, 2))
