/**
 * @param {number[]} height
 * @return {number}
 */
// Time Complexity is O(N^2) where we iterate over array N* N times
// Space complexity is O(1)
const trap1 = function (height) {
    let leftMax = 0
    let ans = 0
    let rightMax = 0
    for (let i = 0; i < height.length; i++) {
        leftMax = 0
        rightMax = 0
        for (let left = i; left >= 0; left--) {
            leftMax = Math.max(leftMax, height[left])
        }
        for (let right = i; right < height.length; right++) {
            rightMax = Math.max(rightMax, height[right])
        }
        ans = ans + Math.min(leftMax, rightMax) - height[i]
    }
    return ans
};



// Space Complexity is O(N) since we iterate three times over height
// Space complexity is O(N) we store the 2 times the height array in dictionary
const trap2 = function (height) {
    const leftMax = {}
    debugger
    leftMax[0] = height[0]
    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }
    const rightMax = {}
    rightMax[height.length - 1] = height[height.length - 1]
    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }
    let ans = 0
    for (let i = 0; i < height.length; i++) {
        ans = ans + Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    return ans

};
trap2([0,1,0,2,1,0,1,3,2,1,2,1])

/**
 * @param {number[]} height
 * @return {number}
 */
// Time complexity is O(N) where N is the length of an array
// O(1) is the space complexity
const trap3 = function (height) {
    let left = 0
    let right = height.length - 1
    let leftMax = 0
    let rightMax = 0
    let ans = 0
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left])
            ans = ans + leftMax - height[left]
            left += 1
        } else {
            rightMax = Math.max(rightMax, height[right])
            ans = ans + rightMax - height[right]
            right -= 1
        }
    }
    return ans
};
