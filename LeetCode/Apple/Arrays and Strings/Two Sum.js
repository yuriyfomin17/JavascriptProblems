/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time Complexity: O(N) where N is the number of elements in the array
// Space Complexity is O(K) where max K is N
const twoSum = function (nums, target) {
    const dict = {}
    debugger
    for (let i = 0; i < nums.length; i++) {
        if(dict[target-nums[i]]!==undefined){
            return [dict[target-nums[i]] ,i]
        }else {
            dict[nums[i]] = i
        }
    }
    return []
};

console.log(
    twoSum([2,7,11,15], 9)
)