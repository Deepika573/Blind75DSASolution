// Brute force solution for two sum problem
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
//Time complexity: O(n^2)
//Space complexity: O(1)

// Two sum problem using hash table optimized
function twoSumOptimized(nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (obj.hasOwnProperty(complement)) {
            return [obj[complement], i];
        }
        obj[nums[i]] = i;
    }
}
// Time complexity: O(n)
//Spac complexity: O(n)

// Two sum problem using hash table map optimized
function twoSumOptimized2(nums, target) {
    let mapt = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mapt.has(target - nums[i])) {
            return [mapt.get(target - nums[i]), i];
        }
        mapt.set(nums[i], i);
    }
}
// Time complexity: O(n)
// Spac complexity: O(n)

console.log(twoSum([0, 7, 2, 15], 9));
console.log(twoSumOptimized([2, 7, 8, 15], 9));
console.log(twoSumOptimized2([0, 9, 2, 7], 9));
