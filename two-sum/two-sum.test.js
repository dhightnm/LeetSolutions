const { test, expect } = require('@jest/globals');
const twoSum = require('./two-sum.js');

test('test check', () => {
    expect(2 + 2).toBe(4);
});

test('Checks if function is correct', () => {
  expect(twoSum([2, 3, 5, 7, 2], 7)).toEqual([0, 2]);
});

console.log(twoSum);
