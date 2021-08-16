/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = x.toString().split('').reverse().join('') * Math.sign(x);
    if (x === parseInt(reverse)) {
        return true;
    }
    return false;
    
};