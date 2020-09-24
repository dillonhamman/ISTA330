
/*
Given an array of integers, 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

 var findDuplicates = function(input) {
     nums = [];
     for (i = 0; i < input.length; i ++){
         for (j = 0; j < input.length; i ++){
             if (i == j){
                 nums.push(j);
             }
         }
     }
 };

 console.log(findDuplicates([19,3,2,10,8,2,3,5]));

