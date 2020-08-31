
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 function isBalanced(cookies, max){
         for (i = 0; i < cookies.length - 1; i ++){
                if (cookies[i] != max){
                        return false;
                } 
         }
         return true;
 }

 var canGetEqualCookies = function(cookies, extraCookies) {
         cookies = cookies.sort();
         var max = cookies[cookies.length - 1];
         for (i = 0; i < cookies.length - 1; i ++){
                extraCookies -= max - cookies[i];
                cookies[i] += max - cookies[i];
                
                
         }
         console.log(cookies, extraCookies);
         if (isBalanced(cookies, max) && extraCookies == 0){ 
                 return true;
         } else {
                for (i = 0; i < cookies.length - 1;i++){
                        if (extraCookies > 0){
                                cookies[i] += 1;
                                extraCookies -= 1;
                                max = cookies[i];
                        }
                }
         }
         return isBalanced(cookies,max);
     
 };

 console.log(canGetEqualCookies([3,5,2], 6));
