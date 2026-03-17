// - Problem description and link  
// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.



let arr=[3,2,4,1];
let target=6;
const twoSum = (arr,target)=>{
const newMap =  new Map();//to store key value array val and index
for(let i=0;i<arr.length;i++){
let compl = target- arr[i];
console.log('com',compl,newMap.has(compl))
if(newMap.has(compl)){
    return([newMap.get(compl),i]);
}
newMap.set(arr[i],i);
}

}

const data =twoSum(arr,target);
console.log('dataset',data)

// Approach used:
// Iterate through the array and use a HashMap to store numbers and their indices.
// For each element, calculate the complement (target - current value) and check if it exists in the map.

// Why:
// HashMap allows fast lookup in constant time O(1), so we avoid using nested loops.

// Time complexity:
// O(n) → we traverse the array only once

// Space complexity:
// O(n) → we store elements in the map

// Pattern used:
// HashMap / Set (lookup pattern)