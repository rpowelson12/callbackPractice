/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

/**
 * 1. accepts sentence and obj
 * 2. object has suffix as keys and cb as values
 * 3. iterate through obj, if word in sentence is a value execute function
 * 4. create new sentence
 * 5. return new sentence
 * 
 * if (word.endsWith(obj[key])) {
 *      obj[key](word);
 * }
 */

let suffixCipher = function(sentence, obj) {
    words = sentence.split(" ");
    keys = Object.keys(obj);
    let result = [];
    let answer = "";
    
    for (word in words){
        for (key in keys){
            
        }
    }

    answer = result.join(" ");
    return answer;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
