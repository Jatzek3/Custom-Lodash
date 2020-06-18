/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-continue */
/* eslint-disable no-param-reassign */

const CustomLodash = {

  addToArray(arr, value) {
    arr[arr.length] = value;
    return arr;
  },

  /**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * */

  chunk(arr, num) {
    if (num > arr.length) {
      return arr;
    }
    let counter = 0;
    let internalArrayIndex = 0;
    const wholeArray = [[]];
    while (arr.length > counter) {
      if ((counter + (arr.length % num)) === arr.length) {
        const lastArr = [];
        for (let i = 0; arr.length > counter; counter += 1) {
          this.addToArray(lastArr, arr[counter]);
        }
        this.addToArray(wholeArray, lastArr);
        return wholeArray;
      } if (wholeArray[internalArrayIndex].length === num) {
        this.addToArray(wholeArray, []);
        this.addToArray([wholeArray[internalArrayIndex], arr.counter]);
        internalArrayIndex = +1;
        counter += 1;
      } else {
        this.addToArray(wholeArray[internalArrayIndex], arr[counter]);
        counter += 1;
      }
    }
    return wholeArray;
  },

  /**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * */

  compact(arr) {
    const newArr = [];
    let counter = 0;
    while (arr.length > counter) {
      if (arr[counter]) {
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

  drop(arr, num) {
    const newArr = [];
    while (num < arr.length) {
      num += 1;
      this.addToArray(newArr, arr[num - 1]);
    }
    return newArr;
  },

  /**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey.
 * @param {Array} array The array to query.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * */

  dropWhile(arr, func) {
    const newArr = [];
    for (let i = 0; arr.length > i; i += 1) {
      if (func(arr[i])) {
        continue;
      }
      this.addToArray(newArr, arr[i]);
    }
    return newArr;
  },

  /**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 * */

  take(arr, num) {
    const newArr = [];
    for (let i = 0; i < num; i += 1) {
      this.addToArray(newArr, arr[i]);
    }
    return newArr;
  },

  /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     * @param {Array} collection The collection to iterate over.
     * @param {Function} function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * */

  filter(arr, func) {
    const newArr = [];
    for (let i = 0; arr.length > i; i += 1) {
      if (func(arr[i])) {
        this.addToArray(newArr, arr[i]);
      }
    }
    return newArr;
  },

  /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     * @param {Array} collection The collection to inspect.
     * @param {Function} function invoked per iteration.
     * @param {index} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * */

  find(arr, func, index = 0) {
    let counter = index;
    while (arr.length > counter) {
      if (func(arr[counter])) {
        return arr[counter];
      }
      counter += 1;
    }
    return arr;
  },

  /**
     * Checks if `value` is in Array If `collection`
     *  If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.

     * @param {Array} Array The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * */

  includes(arr, value, index = 0) {
    let searchFrom = index;
    if (searchFrom < 0) {
      searchFrom = arr.length + index;
    }
    for (let i = searchFrom; arr.length > i; i += 1) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  },

  /**
     * Creates an array of values by running each element in Array thru
     * function.

     * @param {Array} Array The Array to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * */
  map(arr, func) {
    const newArr = [];
    for (let i = 0; arr.length > i; i += 1) {
      this.addToArray(newArr, func(arr[i]));
    }
    return newArr;
  },

  /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.

     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     */

  zip(...arr) {
    const newArr = [];
    const allArrays = arr;
    for (let i = 0; allArrays.length > i; i += 1) {
      this.addToArray(newArr, []);
    }
    for (let i = 0; allArrays.length > i; i += 1) {
      for (let j = 0; allArrays.length > j; j += 1) {
        this.addToArray(newArr[j], allArrays[i][j]);
      }
      // this.addToArray(newArr, innerArr);
    }
    return newArr;
  },
  // <----------------------------------------------------------------------------->
  // Objects
  setProperty(obj, propertyName, propertyValue) {
    // eslint-disable-next-line no-return-assign
    return obj[propertyName] = propertyValue;
  },
  /**
     * Merges own and inherited enumerable string keyed properties of
     * source objects into the destination object.
     *
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @returns {Object} Returns `object`.
     * */

  merge(obj1, obj2) {
    const obj3 = { ...obj1, ...obj2 };
    return obj3;
  },

  /** this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * */

  omit(obj, stringOrArrOfStrings) {
    const newObj = {};
    const paths = stringOrArrOfStrings;
    let i;
    for (i in obj) {
      let keyNotInPaths = true;
      for (let j = 0; j < paths.length; j += 1) {
        if (paths[j] === i) {
          keyNotInPaths = false;
        }
      }
      if (keyNotInPaths) {
        this.setProperty(newObj, i, obj[i]);
      }
    }
    return newObj;
  },

  /**
     * this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).

     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
    * */

  omitBy(obj, func) {
    const newObj = {};
    let i;
    for (i in obj) {
      let isProperValue = true;
      if (!func(obj)) {
        isProperValue = false;
      }
      // eslint-disable-next-line no-cond-assign
      if (isProperValue = true) {
        this.setProperty(newObj, i, obj[i]);
      }
    }
    return newObj;
  },

  /**
     * Creates an object composed of the picked `object` properties.
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
    * */

  pick(obj, stringOrArrOfStrings) {
    const newObj = {};
    const paths = stringOrArrOfStrings;
    let i;
    for (i in obj) {
      let keyInPaths = false;
      for (let j = 0; j < paths.length; j += 1) {
        if (paths[j] === i) {
          keyInPaths = true;
        }
      }
      if (keyInPaths) {
        this.setProperty(newObj, i, obj[i]);
      }
    }
    return newObj;
  },

  /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * */

  pickBy(obj, func) {
    const newObj = {};
    let i;
    for (i in obj) {
      let isProperValue = true;
      if (func(obj)) {
        isProperValue = false;
      }
      if (isProperValue === true) {
        this.setProperty(newObj, i, obj[i]);
      }
    }
    return newObj;
  },
  /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * */

  toPairs(obj) {
    const newArr = [];
    let indexOfArr = 0;
    let i;
    for (i in obj) {
      this.addToArray(newArr, []);
      if (i && typeof obj[i] !== 'undefined') {
        this.addToArray(newArr[indexOfArr], i);
        this.addToArray(newArr[indexOfArr], Number(obj[i]));
        indexOfArr += 1;
      }
    }
    return newArr;
  },

};

module.exports = {
  CustomLodash,
};
