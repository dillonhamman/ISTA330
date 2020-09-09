
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7], [-17,3,1,5,-9,-1,10]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
         input = input.sort();
         return input;
    
 };

 console.log(largestSubarray([-12, 3, -1,5, -2, 1, -7]));
