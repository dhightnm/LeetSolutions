/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hold = {};
    
    nums.forEach(num => {
        hold[num] ? hold[num]++ : hold[num] = 1;
    });
    for (let i = 0; i < nums.length; i++) {
        if (hold[nums[i]] === 1) { return nums[i]}
    }
};