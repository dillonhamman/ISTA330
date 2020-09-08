/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var toDigits = n.toString().split('');
    var sortedDigits = toDigits.map(Number).sort();
    return sortedDigits[sortedDigits.length - 1] - sortedDigits[0];

};

