/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    var outList = [];
    for (i = 0; i < input.length; i ++){
        curr = input[i];
        count = 0;
        for (j = 0; j < input.length; j ++){
            if ( input[j] > curr && input[j] % 2 == 0){
                count ++; 
            }
        }
        outList.push(count);
    }
    return outList;
};

