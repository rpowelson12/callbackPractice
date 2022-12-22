/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true

*******************************************************************************/
/**
 * 1. accepts array, number, cb
 * 2. iterate array
 * 3. pass element to call back
 * 4. determine how many true elements from call back
 * 5. are there num number of true elements?
 */
let exactly = function(array, num, cb) {
    let count = 0;
    let answer = false;

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (cb(element)){
            count++;
        }
    }
    if (count === num) {
        answer = true;
    }
    return answer;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = exactly;
