var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If nums2 still has elements
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

// Approach used:
// Two-pointer technique starting from the end of both arrays

// Why:
// nums1 has extra space at the end, so placing larger elements from the back 
// avoids overwriting existing values and keeps it in-place

// Time complexity:
// O(m + n) → each element from both arrays is processed once

// Space complexity:
// O(1) → in-place merge, no extra memory used

// Pattern used:
// Two-pointer (reverse traversal)

// Memory trick:
// Use three pointers:
// i → last valid element in nums1 (m - 1)
// j → last element in nums2 (n - 1)
// k → last index of nums1 (m + n - 1)

// Loop type:
// Single loop comparing elements from end + extra loop for remaining nums2 elements → O(m + n)