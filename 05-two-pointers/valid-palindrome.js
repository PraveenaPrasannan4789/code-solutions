// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    // Move left pointer forward if not alphanumeric
    while (left < right && !isAlphaNum(s[left])) left++;
    // Move right pointer backward if not alphanumeric
    while (left < right && !isAlphaNum(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function isAlphaNum(character) {
  return /^[a-z0-9]$/i.test(character);
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome("0P")); // false

// Approach used:
// Iterative comparison of characters from both ends using two pointers.
// Why:
// Checks for palindrome efficiently in a single pass, avoiding extra string creation or recursion.
// Time complexity:
// O(n) → n is the length of the string → each character is checked at most once.
// Space complexity:
// O(1) → uses only two pointer variables, no extra arrays or strings needed.
// Pattern used:
// Two-pointer / Sliding window approach.
// Memory trick:
// Skip non-alphanumeric characters on the fly → no need for string cleanup or regex replacements.
// Loop type:
// Single loop → O(n) → pointers move inward from both ends until they meet or mismatch occurs.s
