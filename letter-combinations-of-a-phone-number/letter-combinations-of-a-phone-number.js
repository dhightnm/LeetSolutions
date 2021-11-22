/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) { return [] }
    
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    
    let result = [];
    let permute = (string, idx) => {
        if (idx === digits.length) {
            result.push(string);
            return;
        }
        
        for (let i of map[digits[idx]]) {
            permute(string + i, idx + 1);
        }
        
    };
    
    permute('', 0);
    return result;
    
};