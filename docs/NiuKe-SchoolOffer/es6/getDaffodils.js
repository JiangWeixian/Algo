function getDaffodils (a, b) {
  let cached = Array(10).fill(null).map((item, index) => {
    return Math.pow(index, 3)
  })
  let res = []
  for (var i = a; i < b; i++) {
    let arr = i.toString().split('')
    let sum = arr.reduce((acc, value) => {
      return acc + cached[value]
    }, 0)
    if (sum === i) {
      res.push(i)
    }
  }
  return res.length ? res.sort().join(' ') : 'no'
}
console.log(getDaffodils(100, 120))
console.log(getDaffodils(300, 380))
