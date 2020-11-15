/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
    // if the list has just one element then return that element
    if (nums.length === 1) {
        return nums[0]
    }
    let left = 0
    let right = nums.length - 1
    // if the last element is greater than the first element then
    // there is no rotation. e.g. 1<2<3<4
    // Smallest element is the first element
    if (nums[right] > nums[0]) {
        return nums[0]
    }
    while (right >= left) {
        let mid = Math.floor((left + right) / 2)
        // if the mid element is greater than mid + 1 element then mid + 1 is the smallest
        // and it is the point of inflection
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1]
        }
        // if the mid element is smaller thant its previous element mid - 1 than
        // mid is the smallest and it is the point of inflection
        if (nums[mid - 1] > nums[mid]) {
            return nums[mid]
        }
        // if the mid element is greater than first element thant we need to go to right
        // else go to left
        if (nums[mid] > nums[0]) {
            left = mid + 1
        }else{
            right = mid -1
        }
    }

    return -1
};

