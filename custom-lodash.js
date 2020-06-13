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
}
console.log(CustomLodash.chunk([1,2,3,4,5,6,7],3))


module.exports = { 
    CustomLodash, 
};