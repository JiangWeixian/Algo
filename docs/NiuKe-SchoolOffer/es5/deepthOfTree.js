'use strict';

function createTree(arr) {
  var tree = [];
  function addLeft(leaf, value) {
    leaf.left = value;
  }
  function addRight(leaf, value) {
    leaf.right = value;
  }
  function addLeaf(leaf, value) {
    if (leaf.left === null) {
      addLeft(leaf, value);
      return true;
    }
    addRight(leaf, value);
    return true;
  }
  arr.forEach(function (item) {
    var chain = item.split(' ');
    var index = chain[0];
    var value = chain[1];
    if (tree[index] === undefined) {
      tree[index] = {
        left: null,
        right: null
      };
    }
    addLeaf(tree[index], value);
  });
  return tree;
}

function getDeepth(chain, tree) {
  if (chain === undefined) {
    return 1;
  }
  var lDeepth = getDeepth(tree[chain.left], tree);
  var rDeepth = getDeepth(tree[chain.right], tree);
  return (lDeepth > rDeepth ? lDeepth : rDeepth) + 1;
}

var tree = createTree(['0 1', '0 2', '1 3', '1 4']);
console.log(tree);
console.log(getDeepth(tree[0], tree));