/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Time complexity is O(N^2) since we iterate two times over the loop to find sum
// Space Complexity is O(1) since we are not utilizing any extra space to store results
const subarraySum = function (nums, k) {
    let count = 0
    let sum
    debugger
    for (let start = 0; start < nums.length; start++) {
        sum = 0
        for (let finish = start; finish < nums.length; finish++) {
            sum = sum + nums[finish]
            if (sum === k) {
                count += 1
            }
        }
    }
    return count
};
const subarraySumH = function(nums, k) {
    debugger
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1);
    for (let i=0;i<nums.length;i++) {
        sum += nums[i];
        if (map.has(sum-k)) count += map.get(sum-k);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}

subarraySumH([1, 2, 3], 2)
