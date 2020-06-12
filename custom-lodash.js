class CustomLodash{

/*------------------------------------------------------------------------*/    
/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 **/
    addToArray(arr, value){
        arr[arr.length] = value;
        return arr;
    }

    chunk(arr, num) {
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
                _.addToArray(wholeArray, lastArr)
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
    }
}

let _ = new CustomLodash();
// console.log(_.addToArray([1,2,3],4))
console.log(_.chunk([1,2,3,4,5,6,7],3))

module.exports = { _ }