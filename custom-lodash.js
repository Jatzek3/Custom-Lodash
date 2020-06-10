let _ = require('lodash');


/*------------------------------------------------------------------------*/    
/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 **/

    _.mixin({'customChunk' : function(arr,number) {
        // Yet to be implemented
        // Yet to be implemented
    }
});

console.log(_.customChunk([1,2,3,4],2))