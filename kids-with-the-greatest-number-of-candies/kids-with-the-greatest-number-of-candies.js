/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let most = 0;
    let res = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > most) {
            most = candies[i]
        }
        
    }
    for (let i = 0; i < candies.length; i++) {
        console.log('MOST', most)
        res.push(candies[i] + extraCandies >= most)
        }
    return res;
};