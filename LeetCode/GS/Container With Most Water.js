/**
 * @param {number[]} height
 * @return {number}
 */
// Time Complexity is O(n^2). Calculating for all N(N-1)/2 height pairs
    // Space Complexity O(1). Constant extra space is used
const maxArea = function (height) {
        let maxWater = 0
        debugger
        for (let i = 0; i < height.length; i++) {
            for (let end = height.length - 1; end >= 0; end -= 1) {
                let currWater = (end - i) * Math.min(height[i], height[end])
                if (currWater > maxWater) {
                    maxWater = currWater
                }
            }


        }
        return maxWater
    };
/**
 * @param {number[]} height
 * @return {number}
 */
// Time complexity is O(N) single pass
    // Space complexity is O(1) since constant space is used
const maxArea = function (height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left))
        if (height[left] < height[right]) {
            left += 1
        } else {
            right -= 1
        }
    }
    return  maxArea
};
