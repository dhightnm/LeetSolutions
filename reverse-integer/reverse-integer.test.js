const { test, expect } = require('@jest/globals');
const reverse = require('./reverse-integer.js');

test('Should return a reversed integer', () => {
    expect(reverse(34567)).toBe(76543);
});

test('Should return a negative reversed integer', () => {
    expect(reverse(-34567)).toBe(-76543);
});

test('Should return reversed int with dropped 0\'s', () => {
    expect(reverse(7890)).toBe(987);
});

test('Should return 0 if integer is larger than 32 bit int', () => {
    expect(reverse(2**32)).toBe(0);
});

// console.log(reverseInt(345));