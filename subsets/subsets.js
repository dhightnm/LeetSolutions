/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    dfs([], 0);
    
    function dfs(curr, idx) {
        res.push(curr);
        for (let i = idx; i < nums.length; i++) {
            dfs(curr.concat(nums[i]), i + 1)
        }
    };
    return res;
};