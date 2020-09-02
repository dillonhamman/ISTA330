/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    var outStr = "";
    for (i = 0; i < shuffleIndices.length; i ++){
        outStr += input[shuffleIndices[i]];
    }
    return outStr;
    
};

console.log(suffleString('emelwco', [1, 5, 6, 2, 0, 3, 4]));