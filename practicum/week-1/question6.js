/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var m = Math.floor(input.length / 2);
    return input[m];
};

console.log(median([1, 2, 3, 4, 5, 6, 7, 8]));