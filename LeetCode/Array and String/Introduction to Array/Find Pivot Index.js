/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((acc, val) => {
        return acc + val
    }, 0)
    rightSum = rightSum - nums[0]
    for (let i = 0; i < nums.length - 1; i++) {
        if (leftSum === rightSum) {
            return i
        } else {
            rightSum = rightSum - nums[i+1]
            leftSum = leftSum + nums[i]
        }
    }
    if(rightSum ===leftSum){
        return nums.length-1
    }
    return -1
};

pivotIndex([-1,-1,0,1,1,0])