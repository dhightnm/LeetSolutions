/**
 * @param {number} n
 * @return {boolean}
 */
let sumOfSquare = (n) => {
    let sum = 0;
    while(n) {
        sum += (n % 10) ** 2;
        n = parseInt(n / 10);
    }
    return sum;
};

function isHappy(n){
    const hash = {};
    while(n !== 1 && !hash[n]) {
        hash[n] = true;
        n = sumOfSquare(n);
    }
    return n === 1;
};