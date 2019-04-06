let replaceSpace = (str, target) => {
  return str.split(' ').join(target)
}

let str = 'We are happy'
console.log(replaceSpace(str, '%20'))
