/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    if (input.length % 2 == 1){
        var m = Math.floor(input.length / 2);
        return input[m];
    } else {
        var m = Math.floor(input.length / 2);
        return (input[m] + input[m-1]) / 2;
        
    }
};

console.log(median([1, 2, 2, 3, 4, 7, 9]));