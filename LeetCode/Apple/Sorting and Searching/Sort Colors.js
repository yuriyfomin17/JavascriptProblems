/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Time Complexity is O(NlogN)
    // Space complexity is O(1)
const sortColors = function (nums) {
        nums.sort((a, b) => {
            return a - b
        })
    };

const sortColors2 = function (nums) {
    debugger
    let po = 0
    let curr = 0
    let p2 = nums.length - 1
    let temp
    while (curr<=p2){
        if(nums[curr]===0){
            temp = nums[po]
            nums[po++] = nums[curr]
            nums[curr++] = temp
        }else if(nums[curr]===2){
            temp = nums[curr]
            nums[curr] = nums[p2]
            nums[p2--] = temp
        }else {
            curr++
        }
    }
    return nums
};

console.log(
    sortColors2([2,0,1])
)
