/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time complexity is O(logN) where N is the number of elements
// Space Complexity is O(1)
const searchRange = function (nums, target) {

    let left = 0
    let right = nums.length - 1
    debugger
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target && nums[mid - 1] < target) {
            left = mid
            break
        } else if (nums[mid] === target) {
            right = mid - 1
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }

    }
    let firstIndex = left
    left = 0
    right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(nums[mid]===target && nums[mid+1]>target){
            right = mid
            break

        }else if(nums[mid]===target){
            left = mid + 1
        }else if(nums[mid]>target){
            right = mid -1
        }else {
            left = mid + 1
        }

    }
    let secondIndex = right
    if(firstIndex>secondIndex){
        return [-1,-1]
    }
    return [firstIndex, secondIndex]

};
console.log(
    searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3)
)


var searchRange = function(nums, target) {
    let low = 0, high = nums.length-1, mid;

    // find the start
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(nums[mid] >= target) high = mid-1;
        else low = mid+1;
    }

    // if target doesn't exist
    if(nums[low] !== target) return [-1, -1];

    const start = low;

    // reset low and high
    low = 0, high = nums.length-1;

    // find the end
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(nums[mid] <= target) low = mid+1;
        else high = mid-1;
    }
    return [start, high];
};
