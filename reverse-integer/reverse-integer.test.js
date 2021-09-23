const { test, expect } = require('@jest/globals');
const reverse = require('./reverse-integer.js');

test('Should return a reversed integer', () => {
    expect(reverse(34567)).toBe(76543);
});

test('Should return a negative reversed integer', () => {
    expect(reverse(-34567)).toBe(-76543);
});

// console.log(reverseInt(345));