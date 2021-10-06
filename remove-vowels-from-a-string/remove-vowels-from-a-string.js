/**
 * @param {string} s
 * @return {string}
 */


var removeVowels = function(s) {
    let vowels = 'aeiou';
    let str = s.split('');
    return str.filter(i => 
        !vowels.includes(i)).join('');
};