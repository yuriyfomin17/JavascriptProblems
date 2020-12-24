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

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
// Time Complexity is O(N) for each of the n elements we do at most three searches
    // one insert and one delete on the HashMap which costs
    // constant time on average. Thus entire algorithm costs O(N) time

    // Space Complexity is O(min(n, k)). Space is dominated by the hashMap which is
    // linear to the size of its elements. The size of HasMap is upper bounded by both n and k
const containsNearbyAlmostDuplicate = function (nums, k, t) {
    const buckets = {}
    const range = t + 1
    for (let i = 0; i < nums.length; i++) {
        let bucketIndex = Math.floor(nums[i] / range)
        if (buckets.hasOwnProperty(bucketIndex)) {
            return true
        } else if (buckets.hasOwnProperty(bucketIndex + 1) && Math.abs(nums[i] - buckets[bucketIndex + 1]) < range) {
            return true
        } else if (buckets.hasOwnProperty(bucketIndex - 1) && Math.abs(nums[i] - buckets[bucketIndex - 1]) < range) {
            return true
        }
        buckets[bucketIndex] = nums[i]
        if (i >= k) {
            delete buckets[Math.floor(nums[i - k] / range)]
        }
    }
    return false
};