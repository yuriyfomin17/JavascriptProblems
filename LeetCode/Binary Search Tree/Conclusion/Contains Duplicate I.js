/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Time Complexity is O(N)
// Space Complexity is O(N)
const containsDuplicate = function (nums) {
    const dict = {}
    debugger
    for (let i = 0; i < nums.length; i++) {
        if(dict[nums[i]]!==undefined){
            return true
        }else {
            dict[nums[i]] = i
        }
    }
    return false
};
console.log(
    containsDuplicate([1,2,3,1])

)
