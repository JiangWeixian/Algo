function createTree (arr) {
  let tree = []
  function addLeft (leaf, value) {
    leaf.left = value
  }
  function addRight (leaf, value) {
    leaf.right = value
  }
  function addLeaf (leaf, value) {
    if (leaf.left === null) {
      addLeft(leaf, value)
      return true
    }
    addRight(leaf,value)
    return true
  }
  arr.forEach((item) => {
    let chain = item.split(' ')
    let index = chain[0]
    let value = chain[1]
    if (tree[index] === undefined) {
      tree[index] = {
        left: null,
        right: null
      }
    }
    addLeaf(tree[index], value)
  })
  return(tree)
}

function getDeepth (chain, tree) {
  if (chain === undefined) {
    return 1
  }
  let lDeepth = getDeepth(tree[chain.left], tree)
  let rDeepth = getDeepth(tree[chain.right], tree)
  return (lDeepth > rDeepth ? lDeepth : rDeepth) + 1
}

let tree = createTree(['0 1', '0 2', '1 3', '1 4'])
console.log(tree)
console.log(getDeepth(tree[0], tree))
