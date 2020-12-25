/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Time Complexity O(N*k) where N is the number of elements in array
    // Space Complexity is O(N-k +1) for the output array
    // Time Limit exceeded
const maxSlidingWindow = function (nums, k) {
        const result = []
        const windowArray = []
        debugger
        for (let i = 0; i < nums.length; i++) {
            if (windowArray.length !== k) {
                windowArray.push(nums[i])
            } else {
                result.push(Math.max(...windowArray))
                windowArray.shift()
                windowArray.push(nums[i])
            }
        }
        result.push(Math.max(...windowArray))
        return result
    };


// Time Complexity is O(N*K) where N is the number of elements in array
// Space Complexity is O(N-k+1) for the output array
const maxSlidingWindow = function (nums, k) {
    debugger
    const result = []
    const currArr = []
    let currMax = -Infinity
    debugger
    for (let i = 0; i < nums.length; i++) {
        if (currArr.length === 0) {
            while (currArr.length !== k && currArr.length !== nums.length) {
                currArr.push(nums[i])
                currMax = Math.max(currMax, nums[i])
                i = i + 1
            }
            i = i - 1
            result.push(currMax)
        } else {
            let removed = currArr.shift()
            if (removed !== currMax) {
                currArr.push(nums[i])
                currMax = Math.max(nums[i], currMax)
                result.push(Math.max(currMax, nums[i]))
            } else {
                currArr.push(nums[i])
                currMax = Math.max(...currArr)
                result.push(currMax)
            }
        }
    }
    return result
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow1 = function (nums, k) {
    // Decreasing monotonic queue so the maximum value is at the front
    const dequeue = [];
    const output = [];
    /*
     * The goal is to maintain a decreasing monotonic queue and register
     * max value as the window shifts.
     *
     * nums = [1,3,-1,-3,5,3,6,7], k = 3
     *
     * i        queue           output
     * 0        [1]             []
     * 1        [3]             []
     * 2        [3, -1]         [3]
     * 3        [3, -1, -3]     [3, 3]
     * 4        [5]             [3, 3, 5]
     * 5        [5, 3]          [3, 3, 5, 5]
     * 6        [6]             [3, 3, 5, 5, 6]
     * 7        [7]             [3, 3, 5, 5, 6, 7]
     */
    for (let i = 0; i < nums.length; i++) {
        // add the number at the right position queue
        while (nums[i] > dequeue[dequeue.length - 1]) {
            dequeue.pop();
        }
        dequeue.push(nums[i]);
        /**
         * once the window fully overlaps the array, we can start register
         * the maximum values in each iteration.
         */
        if (i >= k - 1) {
            output.push(dequeue[0]);
            // remove maximum value when it's moving outside of the window
            if (nums[i - k + 1] === dequeue[0]) {
                dequeue.shift();
            }
        }
    }

    return output;
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Time Complexity is O(N) since we iterate through the entire array once
// Space Complexity is O(K) where K is the size of the window
const maxSlidingWindow2 = function (nums, k) {
    const queue = []
    const result = []
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > queue[queue.length - 1]) {
            queue.pop()
        }
        queue.push(nums[i])
        if (i >= k - 1) {
            result.push(queue[0])
            if (nums[i - k + 1] === queue[0]) {
                queue.shift()
            }
        }
    }
    return result
};