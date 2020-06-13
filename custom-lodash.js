const CustomLodash = {

addToArray : function(arr, value){
    arr[arr.length] = value;
    return arr;
},

/*------------------------------------------------------------------------*/    
/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 **/

chunk : function(arr, num) {
    if (num > arr.length){
        return arr;
    }
    let counter = 0;
    let internalArrayIndex = 0;
    let wholeArray = [[]];
    while (arr.length > counter){
        if (counter + arr.length % num == arr.length){
            let lastArr = [];
            for (let i=0; arr.length > counter; counter += 1){
                this.addToArray(lastArr,arr[counter])
            }
            this.addToArray(wholeArray, lastArr)
            return wholeArray;
    }
        else if (wholeArray[internalArrayIndex].length == num){
        this.addToArray(wholeArray, []);
        this.addToArray[wholeArray[internalArrayIndex], arr.counter];
        internalArrayIndex =+ 1;
        counter +=1;
    } else {
        this.addToArray(wholeArray[internalArrayIndex], arr[counter]);
        counter +=1;
    }

    };
},
    /**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.*/
compact :function(arr){
    let newArr = [];
    let counter = 0
    while (arr.length > counter){
        if(arr[counter]){
            this.addToArray(newArr, arr[counter]);
            counter += 1;
        } else {
            counter += 1;
        }
    }
    return newArr;
},
/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`. 
 * */

drop : function(arr, num){
    let newArr = [];
    while (num < arr.length){
        num += 1;
        this.addToArray(newArr, arr[num -1])
    }
    return newArr;
},
/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 * @param {Array} array The array to query.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.*/

dropWhile : function(arr, func){
    let newArr = [];
    for (let i=0; arr.length > i; i += 1){
        if (func(arr[i])){
            this.addToArray(newArr, arr[i])
        }
    return newArr;
}},
/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 * */
take : function (arr, num) {
    let newArr =[];
    for (let i=0; i < num; i += 1){
        this.addToArray(newArr, arr[i])
    }
    return newArr;
},
    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * */
filter : function(arr, func){
    let newArr = [];
    for(let i = 0; arr.length > i; i += 1){
        if (func(arr[i])){
            this.addToArray(newArr, arr[i])
        }
    }
    return newArr;
},
find : function(arr, func){
    counter = 0
    while (arr.length > counter){
        if (func(arr[counter])){
            return arr[counter];
        }
        counter += 1;
    }
}


}
// console.log(CustomLodash.filter([1,2,3,4,5,6], (a) => a % 2 == 0))
// console.log(CustomLodash.take([1,2,3,4,5,6], 3))
// console.log(CustomLodash.dropWhile([1,2,3,4,5,6], (a)=> a < 4))

module.exports = { 
    CustomLodash, 
};