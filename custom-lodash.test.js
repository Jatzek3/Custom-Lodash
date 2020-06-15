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
//     expect(CustomLodash.CustomLodash.dropWhile([1,2,3,4,5,6], (a)=> a < 4)).toContainEqual([4,5,6])
// });
test('Creates a slice of array with n elements taken from the beginning.',
 () => {
    expect(CustomLodash.CustomLodash.take([1,2,3,4,5,6],3))
    .toStrictEqual([1,2,3]);
});

test('Iterates over elements of Array, returning an array of all elements predicate returns truthy',
 () => {
    expect(CustomLodash.CustomLodash.filter([1,2,3,4,5,6], (a) => a % 2 == 0))
    .toStrictEqual([2,4,6]);
});

test('Iterates over elements of Array, returning the first element predicate returns truthy for.',
 () => {
    expect(CustomLodash.CustomLodash.find([1,2,3,4,5,6], (a) => a % 3 == 0,4))
    .toBe(6);
});

test("Checks if value is in Array",
 () => {
    expect(CustomLodash.CustomLodash.includes([1,2,3,4,5], 3, -4 ))
    .toBe(true);
});

test("Creates an array of values by running each element in Array thru iteratee.",
 () => {
    expect(CustomLodash.CustomLodash.map([2,4,8], (n) => n * n))
    .toStrictEqual([4,16,64]);
});

test("Creates an array of grouped elements",
 () => {
    expect(CustomLodash.CustomLodash.zip([2,4,6], ['A', 'B', 'C'], [true, false, true]))
    .toContainEqual([2,'A',true],[4,'B',false],[6,'C',true])
})