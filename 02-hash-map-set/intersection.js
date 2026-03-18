// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.



// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.


// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


const intersec = (array1, array2) => {
    console.log('array1,array2', array1, array2)
    let newSet = new Set();
    for (let x of array1) {
        console.log(x)
        newSet.add(x);
    }
    console.log('newset', newSet);

    let finalSet = new Set();
    for (let y of array2) {

        if (newSet.has(y)) {
            finalSet.add(y);
        }
    }
    return [...finalSet];

}

//or
// const intersec = (a, b) => {
//     const setA = new Set(a);
//     return [...new Set(b.filter(x => setA.has(x)))];
// }

console.log(intersec([4, 9, 5], [9, 4, 9, 8, 4]));


// Approach used:
// Store first array in a Set, then check elements from second array

// Why:
// Set provides fast lookup and avoids duplicates

// Time complexity:
// O(n + m)

// Space complexity:
// O(n)

// Pattern used:
// HashSet / Lookup


// Simple memory trick

// One loop → O(n)

// Two separate loops → O(n + m)

// Nested loops → O(n * m)