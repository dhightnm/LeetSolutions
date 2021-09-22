/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++)  {
        const chars = strs[0][i];
        
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== chars) {
                return prefix
            }
        }
        prefix = prefix + chars;
    }
    return prefix;
};