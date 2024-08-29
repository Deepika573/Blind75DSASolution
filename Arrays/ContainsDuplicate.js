// Brute force solution for contains duplicate
function ContainsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        return true;
      }
    }
  }
  return false;
}
// Time complexity: O(n^2)
// Space complexity: O(1)

console.log(ContainsDuplicate([1, 2, 3, 1]));

