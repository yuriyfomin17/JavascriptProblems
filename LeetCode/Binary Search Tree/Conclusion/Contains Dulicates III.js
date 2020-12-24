/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
// Time Complexity is O(n min(k, n)). It costs O(min(k, n)) time for each linear search
    // Note that we do at most n comparisons in one search even if k can be larger than n
    // Space complexity is O(1)
const containsNearbyAlmostDuplicate = function (nums, k, t) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = Math.max(0, i - k); j < i; j++) {
                if (Math.abs(nums[i] - nums[j]) <= t) {
                    return true
                }
            }
        }
        return false
    };

const containsNearbyAlmostDuplicateB = function (nums, k, t) {
    let bucket = {}, w = t + 1;
    debugger
    for (let i = 0; i < nums.length; i++) {
        let idx = Math.floor(nums[i] / w);
        if (bucket.hasOwnProperty(idx)) return true;
        else if (bucket.hasOwnProperty(idx + 1) && Math.abs(nums[i] - bucket[idx + 1]) < w) return true;
        else if (bucket.hasOwnProperty(idx - 1) && Math.abs(nums[i] - bucket[idx - 1]) < w) return true;
        bucket[idx] = nums[i];
        if (i >= k) {
            delete bucket[Math.floor(nums[i - k] / w)];
        }
    }
    return false;
};

console.log(containsNearbyAlmostDuplicateB([1, 2, 3, 1], 3, 0))