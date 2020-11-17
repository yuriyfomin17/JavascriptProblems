/**
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity is O(Nlog(N)) + O(N)=> O(Nlog(N)) since O(Nlog(N)) dominates acording to big O
// Space Complexity is O(1)
const findDuplicate = function (nums) {
    debugger
    nums.sort(function (a, b) {
        if(a>b){
            return 1
        }else {
            return -1
        }
    })
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            return nums[i]
        }
    }
};
findDuplicate([1, 3, 4, 2, 2])

/**
 * @param {number[]} nums
 * @return {number}
 */
// Time Complexity is O (N) since we iterate through each element
// Space Complexity is O(N) since we store elements in set
const findDuplicate = function (nums) {
    debugger
    const dict = {}
    for (let i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) {
            dict[nums[i]] = 1
        } else {
            return nums[i]
        }
    }
};
findDuplicate([1, 3, 4, 2, 2])