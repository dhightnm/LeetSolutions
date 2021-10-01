/**
 * @param {number} n
 * @return {number}
 */

let cache = {};
var climbStairs = function(n) {
    if (n === 0 || n === 1) { 
        return 1 
    }
    
    if (!(n in cache)) {
        cache[n] = climbStairs(n -1) + climbStairs(n - 2);
    }
    return cache[n];
    
};