function solution (number) {
  if (number > 0) {
    let nums = Array.from(Array(number), (value, index) => {
      return (index % 3 === 0 || index % 5 === 0) ? index : 0
    })
    return nums.reduce((acc, value) => {
      return acc + value
    })
  }
  return 0
}

console.log(solution(0))
