/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* Brute Force Attempt
var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i,j]; 
            }
        }
    }
};
*/

// Using Hash 

var twoSum = function(nums, target) {
  const hash = {};
    
  nums.forEach((item, index) => {
    hash[item] = index;
  }); 
    
  for (let index = 0; index < nums.length; index++){
    const comp = target - nums[index];
        
    if (hash[comp] !== undefined && hash[comp] !== index) {
      return [index, hash[comp]];
    }
  }
};

