/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/


/**
 * 1. accepts array and optional callback
 * 2. if callback not provided, return min value
 * 3. if callback present, pass element to array and return smallest value
 */

let minValueCallback = function(array, cb) {
    let compare = Infinity;

    if (cb === undefined) {
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            if (element < compare || element === array[0]) {
                compare = element;
            }
        }
    }
    else {
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            let newElement = cb(element);
            if (newElement < compare || element === array[0]) {
                compare = newElement;
            }
        }
    }
    return compare;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
