/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(num) {
    let sum = 0;
    for (i of num) {
        sum += i;
    }
    if (sum % 2 !== 0) {
        return false;
    }
    
    const dp = [];
    return canPartitionRecurse(dp, num, sum / 2, 0);
};

let canPartitionRecurse = (dp, num, sum, currentIdx) => {
    //base case
    if (sum === 0) { return true };
    if (num.length === 0 || currentIdx >= num.length) { return false };
    
    dp[currentIdx] = dp[currentIdx] || [];
    
    if (typeof dp[currentIdx][sum] === 'undefined') {
        if (num[currentIdx] <= sum) {
            if (canPartitionRecurse(dp, num, sum - num[currentIdx], currentIdx + 1)) {
                dp[currentIdx][sum] = true;
                return true
            }
        }
        dp[currentIdx][sum] = canPartitionRecurse(dp, num, sum, currentIdx + 1);
    }
    return dp[currentIdx][sum];
}