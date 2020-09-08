/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
        input = input.sort();
        var max = input[input.length - 1];
        var secMax = input[input.length -2];
        if (secMax * 2 > max){
                return false;
        } else {
                return true;
        }
};

console.log(largestNumberIsAtLeastTwice([3, 2, 21, 50]));
