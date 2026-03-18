// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true


const nums=  [5,6,7,5];
let mapVal = new Map();
function check(){

    for (let i=0;i<nums.length;i++){
        if(mapVal.has(nums[i])){
            return true
        }
        mapVal.set(nums[i],true)
    }
    return false;
}

const res = check();
console.log(res);


//set
const data =[4,5,6,7]
let setData = new Set();
function checkNumber(){
for(let nums of data){
    console.log(nums,setData)
    if(setData.has(nums)){
        return true
    }
    setData.add(nums);
}
 return false;
}

const result= checkNumber();

console.log('checked result',result)


// Approach used:
// Use Set to track unique values

// Why:
// Set provides fast lookup O(1)

// Time complexity:
// O(n)

// Space complexity:
// O(n)

// Pattern used:
// HashSet / lookup