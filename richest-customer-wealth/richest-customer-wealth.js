/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let holder = 0;
    for (let person of accounts) {
       let wealth = person.reduce((a, b) => a + b);
        if (wealth > holder) {
            holder = wealth;
        }
    }
    return holder;
    
};