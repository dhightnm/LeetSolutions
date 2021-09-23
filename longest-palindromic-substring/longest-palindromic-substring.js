/**
 * @param {string} s
 * @return {string}
 */
 const expand = (s, begin, end) => {
        while ( begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
            begin--;
            end++
        }
     return s.substring(begin + 1, end);
    }
 
var longestPalindrome = function(s) {
    if (!s || s.length <= 1) {
        return s
    }
    
    let longest = s.substring(0, 1);
    console.log(longest);
    for ( let i = 0; i < s.length; i++ ) {
        let temp = expand(s, i, i)
        if (temp.length > longest.length){
            longest = temp;
        }
        temp = expand(s, i, i + 1)
        if (temp.length > longest.length) {
            longest = temp;
        }
    }
    return longest;
};