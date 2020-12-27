/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = function (nums, k) {
    const dict = {}
    debugger
    for (let i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) {
            dict[nums[i]] = 1
        } else {
            dict[nums[i]] = dict[nums[i]] + 1
        }
    }
    let result = 0
    for (let [key, value] of Object.entries(dict)) {
        if (k > 0 && dict[Number(key) + k] !== undefined) {
            result += 1
        } else if (k === 0 && value > 1) {
            result += 1
        }
    }
    return result
};
// Time Complexity is O(N). It takes O(N) to create an initial frequency hash map
// and another O(N) to traverse the keys of that hasmap. Time colpexity for key lookup in Hash is O(1)
// but with collisions it is O(N) which is rare. Thus, time complexity is O(2N)= O(N)


// Space complexity is O(N). We will keep the table to count the frequency of each unique number in the input
// In worst case all numbers are unique in the array. As a result, the maximum size of table is O(N)