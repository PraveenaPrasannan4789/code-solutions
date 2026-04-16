// 11. Container With Most Water
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let width = right - left;
    let h = Math.min(height[left], height[right]);
    let area = width * h;

    maxWater = Math.max(maxWater, area);

    // move the smaller height pointer
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};

// Approach used:
// Two pointers technique starting from both ends of the array.
// Compute area at each step using the shorter line as height and distance as width.
// Move the pointer pointing to the smaller height inward to try and find a larger area.

// Why:
// The height of the container is limited by the shorter line.
// Moving the taller line will not increase area, so we always move the shorter one to potentially find a better boundary.

// Time complexity:
// O(n) → Each element is visited at most once as pointers move inward from both ends.

// Space complexity:
// O(1) → Only a few variables are used (left, right, maxArea), no extra data structures.

// Pattern used:
// Two-pointer / Greedy approach.

// Memory trick:
// "Shrink the smaller wall" → Always eliminate the limiting height to try improving the answer.

// Loop type:
// Single while loop → O(n) → continues until left pointer meets right pointer.
