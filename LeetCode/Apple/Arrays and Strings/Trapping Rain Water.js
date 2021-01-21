/**
 * @param {number[]} height
 * @return {number}
 */
// Time Complexity is O(N) since we iterate only once through an array
    // Space Complexity is O(1) since don't utilize any extra space
const trap = function (height) {
    let rainWater = 0
    let left = 0
    let right = height.length - 1
    let leftMax = -Infinity
    let rightMax = -Infinity
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left])
            rainWater = rainWater + leftMax - height[left]
            left += 1
        } else {
            rightMax = Math.max(rightMax, height[right])
            rainWater = rainWater + rightMax - height[right]
            right-=1
        }
    }
    return  rainWater
};

console.log(
    trap(
        [0,1,0,2,1,0,1,3,2,1,2,1]
    )
)