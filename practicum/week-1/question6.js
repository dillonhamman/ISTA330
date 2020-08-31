/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var total = 0;
    for (i = 0; i < input.length - 1; i ++){
        total += input[i];
    }
    return total / input.length;
};