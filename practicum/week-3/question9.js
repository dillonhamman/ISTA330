/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
    A = A.sort();
    return A[A.length - 1] - A[0];
};

console.log(minMoves([2,1,2]));