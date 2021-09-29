/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arr = [...nums];
    
    return [...nums, ...arr];
    
};