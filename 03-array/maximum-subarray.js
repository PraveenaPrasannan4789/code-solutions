// Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

var maxSubArray = function(nums) {
   let currentSum = nums[0];
   let maxSum = nums[0];
    for(let i =1;i<nums.length;i++){
        currentSum = Math.max(nums[i],currentSum+nums[i]);
        maxSum=Math.max(currentSum,maxSum);
        console.log(currentSum,maxSum);
    }
    return maxSum;
};

console.log(maxSubArray([1]))
 

// Problem: Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Example: nums = [-2,1,-3,4,-1,2,1,-5,4] → max sum = 6 ([4,-1,2,1])

// Approach used:
// Track current subarray sum and update maximum sum in one pass

// Why:
// Ensures we consider all contiguous subarrays efficiently without checking every pair

// Time complexity:
// O(n) → one pass through the array of n elements

// Space complexity:
// O(1) → only a few variables used (currentSum, maxSum, optional indices)
// let currentSum = nums[0];
// let maxSum = nums[0];
// Memory does NOT grow with input size

// Pattern used:
// Greedy / Kadane's Algorithm / Single pass

// Memory trick:
// currentSum → maxSum
// (At each step, either start a new subarray or extend the previous)

// Loop type:
// Single loop → O(n)