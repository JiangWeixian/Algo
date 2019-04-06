/**
 * 其实思路就是归并排序的思路。输入的都是有序数组。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let num1Start = 0
  let num2Start = 0
  let num1Len = nums1.length
  let num2Len = nums2.length
  let merge = []

  // 注意while中止条件，不能够等于num1Len
  while (num1Start < num1Len && num2Start < num2Len) {
    if (nums1[num1Start] < nums2[num2Start]) {
      merge.push(nums1[num1Start])
      num1Start += 1
    } else {
      merge.push(nums2[num2Start])
      num2Start += 1
    }
  }
  if (num2Start < num2Len) {
    merge = merge.concat(nums2.slice(num2Start, num2Len))
  }
  if (num1Start < num1Len) {
    merge = merge.concat(nums1.slice(num1Start, num1Len))
  }
  // 新的数组长度是两个数组长度相加减去1
  let mid = Math.floor((num1Len + num2Len - 1) / 2)
  return (num1Len + num2Len) % 2? merge[mid]:(merge[mid] + merge[mid + 1]) / 2
};

console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,2], [3, 4]))