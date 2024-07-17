/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let a = 0, b = 0, c = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) c++;
        else if(nums[i] === 1) a++;
        else if(nums[i] === 2) b++;
        }
    for(let i = 0; i < nums.length; i++){
        if(i < c) nums[i] = 0;
        else if(i < c + a) nums[i] = 1;
         else if(i < c + a + b) nums[i] = 2;
        }    
};