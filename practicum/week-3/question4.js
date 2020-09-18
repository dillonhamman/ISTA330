/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {
  var pSet = [[]];
  for (i = 0; i < input.length; i ++){
    var size = pSet.length;
    for (j = 0; j < size; j ++){
      pSet.push(pSet[j].concat(input[i]));
    }
  }

  return pSet;
};
