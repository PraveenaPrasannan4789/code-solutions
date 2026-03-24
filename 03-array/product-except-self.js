// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30



const productOfArray =(nums)=>{
const n = nums.length;
const leftArray = new Array(n).fill(1);
const rightArray = new Array(n).fill(1);
const totalArray = new Array(n);

for(let i=1;i<n;i++){
    leftArray[i]= leftArray[i-1]*nums[i-1];
}

for(let i=n-2;i>=0;i--){
    rightArray[i]= rightArray[i+1]*nums[i+1];
}

for (let i=0;i<n;i++){
    totalArray[i]= leftArray[i]*rightArray[i];
}
return totalArray;

}

console.log('productOfArray',productOfArray([1,2,3,4]))

// Approach used:
// Use prefix and suffix products to calculate result without division

// Why:
// Ensures each index multiplies all other elements in one pass

// Time complexity:
// O(n) → three linear passes: prefix, suffix, final multiply

// Space complexity:
// O(n) → two extra arrays for prefix and suffix (can optimize to O(1))

// Pattern used:
// Prefix-Suffix Product, single pass

// Memory trick:
// left prefix → right suffix → multiply → result

// Loop type:
// Three linear loops → O(n)