/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let left = nums.slice(0, n);
    let right = nums.slice(n, nums.length);
    let newArr = [];
    
    for (let i = 0; i < left.length; i++) {
        newArr.push(left[i]);
        newArr.push(right[i]);
    }
    return newArr;
    
};