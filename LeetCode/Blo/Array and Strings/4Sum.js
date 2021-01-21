/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
    debugger
    nums.sort(function (a, b) {
        return a - b;
    });
    return kSum(nums, target, 0, 4);

}

function kSum(nums, target, start, k) {
    let res = [];
    if (start === nums.length || nums[start] * k > target || nums[nums.length - 1] * k < target) {
        return res;
    }
    if (k === 2) {
        return twoSum(nums, target, start);
    }

    for (let i = start; i < nums.length; ++i) {
        if (i === start || nums[i - 1] !== nums[i]) {
            kSum(nums, target - nums[i], i + 1, k - 1).forEach(function (arry) {
                res.push([nums[i], ...arry]);
            })
        }
    }
    return res;
}

function twoSum(nums, target, start) {
    let lo = start;
    let hi = nums.length - 1;
    let res = [];
    while (lo < hi) {
        let sum = nums[lo] + nums[hi];
        if (sum < target || (lo > start && nums[lo] === nums[lo - 1])) {
            ++lo;
        } else if (sum > target || (hi < nums.length - 1 && nums[hi] === nums[hi + 1])) {
            --hi;
        } else {
            res.push([nums[lo++], nums[hi--]])
        }
    }
    return res;
}

console.log(
    fourSum([1, 0, -1, 0, -2, 2],
        0)
)