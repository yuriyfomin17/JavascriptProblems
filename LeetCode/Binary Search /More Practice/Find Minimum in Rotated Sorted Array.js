/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let left = 0
    let right = nums.length - 1
    if (nums[left] < nums[right]) {
        return nums[left]
    }
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1]
        }
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid - 1]
        }
        if(nums[mid]>nums[0]){
            left = mid + 1
        }else {
            right = mid -1
        }
    }
    return -1
};
console.log(
    findMin([4, 5, 6, 7, 0, 1, 2])
)
