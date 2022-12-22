/*******************************************************************************
Write a function `mapMutator` that accepts an array and a callback as arguments.
The function should pass each element and index into the callback and use the result
to overwrite elements of the original array, mutating the array.

Examples:

let arr1 = [4, 2, 6, 5];
mapMutator(arr1, function (el) {
    return el * 2;
});
console.log(arr1);  // [ 8, 4, 12, 10 ]

let arr2 = [8, 9, 10];
mapMutator(arr2, function (el, i) {
    return el * i;
});
console.log(arr2); // [ 0, 9, 20 ]
*******************************************************************************/

/**
 * 1. accepts array and cb
 * 2. pass element and index into the cb using them to mutate original array. 
 * 3. return mutated array
 */


let mapMutator = function(array, cb) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        array[i] = (cb(element, i));
    }
    return array;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mapMutator;
