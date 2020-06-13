const CustomLodash = require('./custom-lodash.js');

test('Adds a value to Array', () =>{
    expect(CustomLodash.CustomLodash.addToArray([1,2,3],4)).toStrictEqual([1,2,3,4]);
});
test('split an array in to parts of given length', () => {
    expect(CustomLodash.CustomLodash.chunk([1,2,3,4],3)).toStrictEqual([[1,2,3],[4]]);
});
test('Creates an array with all falsey values removed. The values `false`, `null`', () =>{
    expect(CustomLodash.CustomLodash.compact([0,1,2,3,4,null])).toStrictEqual([1,2,3,4]);
});
test('Creates a slice of `array` with `n` elements dropped from the beginning', () => {
    expect(CustomLodash.CustomLodash.drop([1,2,3,4,5,6],3)).toStrictEqual([4,5,6]);
});
// test('Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey', () => {
//     expect(CustomLodash.CustomLodash.dropWhile([1,2,3,4,5,6], (a)=> a < 4)).toStrictEqual([4,5,6])
// });
test('Creates a slice of array with n elements taken from the beginning.', () => {
    expect(CustomLodash.CustomLodash.take([1,2,3,4,5,6],3)).toStrictEqual([1,2,3])
});
test('Iterates over elements of collection, returning an array of all elements predicate returns truthy', () => {
    expect(CustomLodash.CustomLodash.filter([1,2,3,4,5,6], (a) => a % 2 == 0)).toStrictEqual([2,4,6]);
});
test('Iterates over elements of collection, returning the first element predicate returns truthy for.', () => {
    expect(CustomLodash.CustomLodash.find([1,2,3,4,5,6], (a) => a % 3 == 0)).toBe(3);
});