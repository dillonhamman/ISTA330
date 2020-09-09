/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    for (i = 0; i < input.length; i ++){
        for (j = 0; j < input.length; j ++){
            if (input[i] >= input[j] && i > j){
                return false;
            } else if (input[i] <= input[j] && i > j){
                return false;   
            }
        }
    }
    return true;

};

console.log('hi');