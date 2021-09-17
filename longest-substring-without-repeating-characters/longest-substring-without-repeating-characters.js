/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let storage = [];
    let subLength = 0;
    
    for (let i = 0; i < s.length; i++){
        const charPosition = storage.indexOf(s[i]);
        
        if (charPosition !== -1){
            storage.splice(0, charPosition + 1)
        }
        storage.push(s[i]);
        
        subLength = Math.max(subLength, storage.length);
    } 
    return subLength;
};