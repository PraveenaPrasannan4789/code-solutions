// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

const missingNumber = (arr) => {
  const length = arr.length;
  for (let i = 0; i <= length; i++) {
    if (!arr.includes(i)) return i;
  }
};

const numberMissing = missingNumber([0, 1, 2, 4]);
console.log(numberMissing);

// arr.includes(i) inside a loop is O(n²) in worst case

const missingNumber1 = (arr) => {
  const length = arr.length;
  const totalSum = (length * (length + 1)) / 2;
  const arrSum = arr.reduce((acc, num) => {
    acc = acc + num;
    return acc;
  }, 0);
  const num = totalSum - arrSum;
  return num;
};

const numberMissing1 = missingNumber1([0, 1, 2, 4]);
console.log(numberMissing1);

//This runs in O(n) time and O(1) space.
//Time: O(n) → reduce() iterates through the array once
//Space: O(1) → only a few variables are used, no extra arrays or objects

// Approach used:
// Calculate the expected sum of numbers from 0 to n and subtract the actual array sum

// Why:
// The difference between the expected sum and the actual sum gives the missing number

// Time complexity:
// O(n) → single pass to compute array sum using reduce

// Space complexity:
// O(1) → only a few variables used, no extra arrays

// Pattern used:
// Mathematical / arithmetic sum pattern

// Memory trick:
// Use sum formula (n * (n + 1)) / 2 to avoid extra storage

// Loop type:
// Single pass loop (reduce) to calculate array sum