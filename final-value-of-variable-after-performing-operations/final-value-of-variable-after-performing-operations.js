/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let count = 0;
    
    operations.forEach(op => {
        if (op === "++X" || op === "X++") {
            count ++;
        } else {
            count--;
        }
    })
    return count;
};