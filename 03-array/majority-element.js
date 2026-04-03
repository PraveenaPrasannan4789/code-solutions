// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
// The input is generated such that a majority element will exist in the array.

//using hash map
function majorityElement(nums) {
    const count = new Map(); // Map to store frequency of each number

    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1); // Increment count
        if (count.get(num) > nums.length / 2) return num; // Check majority
    }

    return -1; // Should never reach here due to problem constraint
}

console.log(majorityElement([3,2,3])); // Output: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Output: 2


//using object
function majorityElement1(nums) {
    const obj1={};
    for(let num of nums){
        obj1[num] = (obj1[num]||0)+1;
        if(obj1[num] > nums.length /2)
            return num;
    }
    return -1;
}
console.log(majorityElement1([3,2,3])); // Output: 3
console.log(majorityElement1([2,2,1,1,1,2,2])); // Output: 2