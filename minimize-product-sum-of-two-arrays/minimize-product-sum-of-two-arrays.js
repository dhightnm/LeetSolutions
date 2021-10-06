/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function(nums1, nums2) {
    let nums1sort = nums1.sort((a, b) => a - b);
    let nums2sort = nums2.sort((a,b) => b - a);
    let sum = 0;
    for (let i = 0; i < nums1.length; i++){
        sum += nums1sort[i] * nums2sort[i];
        
    };
    return sum;
};