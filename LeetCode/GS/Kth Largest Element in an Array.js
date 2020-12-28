/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Time complexity is O(Nlog(k))
    // Space Complexity O(K)
const findKthLargest = function (nums, k) {
    nums.sort(function (a, b) {
        if (a > b) {
            return -1
        } else {
            return 1
        }
    })
    for (let i = 0; i < nums.length; i++) {
        if (i === k - 1) {
            return nums[i]
        }
    }

};
//Time complexity for this solution is O(N + logN). N is the dominating term thus we can round it to just O(N)
var findKthLargest = function(nums, k) {
    // the final position of the kth largest number in a sorted array
    const finalIdx = nums.length - k;
    let left = 0;
    let right = nums.length-1;

    while(left <= right) {
        // random num between left and right
        const pivot = Math.floor(Math.random() * (right - left + 1)) + left;
        // the final position of the pivot in a sorted array
        const pivotIdx = pivotHelper(pivot, left, right);
        // the target number is in its correct postion, thus return
        if(pivotIdx === finalIdx) return nums[finalIdx];

        // if pivotIdx is smaller we undershot, so look only on the right half
        if(pivotIdx < finalIdx) left = pivotIdx + 1;
        // else we overshot, so look only on the left half
        else right = pivotIdx - 1;
    }

    function pivotHelper(pivot, start, end) {
        // move the pivot to the end (get it out of the way)
        swap(pivot, end);

        let i = start;
        let j = start;

        // move smaller nums to the begining of the array
        while(j < end) {
            if(nums[j] <= nums[end]) {
                swap(i, j);
                i++;
            }
            j++;
        }
        // swap pivot to its final position
        swap(i, end);
        return i;
    }

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};