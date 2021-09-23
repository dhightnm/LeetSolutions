const removeDuplicates = require('./remove-duplicates-from-sorted-array');

test('Should remove duplicates from an array', () => {
    expect(removeDuplicates([2, 2, 3, 4, 5, 5])).toEqual(4);
});

test('Should remove duplicates from an array', () => {
    expect(removeDuplicates([2, 2, 3, 4, 5, 5, 6, 6, 7, 7])).toEqual(6);
});