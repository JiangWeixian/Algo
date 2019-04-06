let jump = function () {
  let steps = [1, 2],
    cached = {}
  function updateTheory (step, lastTheory) {
    return lastTheory.map((item) => {
      // 不使用.push(step)。因为push这个api没有返回数组。
      return [step].concat(item)
    })
  }
  function findTheory (target) {
    let theory = []
    if (target <= 0) {
      cached[target] = [[]]
      return cached[target]
    }
    if (cached[target]) {
      return cached[target]
    }
    for (let i = 0; i < steps.length; i++) {
      let step = steps[i]
      let newTarget = target - step
      let newTheory = []
      if (newTarget >= 0) {
        // step需要和上一步策略中每一种可能性相互连接
        newTheory = updateTheory(step, findTheory(newTarget))
        // 连接step=1和step=2两种策略结果
        theory = theory.concat(newTheory)
      }
    }
    cached[target] = theory
    return theory
  }
  return function (target) {
    if (cached[target]) {
      return cached[target]
    } else {
      let result = findTheory(target)
      return result
    }
  }
}

let jumpSteps = jump()
// 边界测试
console.log(jumpSteps(0))
console.log(jumpSteps(1))
console.log(jumpSteps(2))
console.log(jumpSteps(3))
// 功能测试
console.log('5', jumpSteps(5))
console.log('10', jumpSteps(10))
