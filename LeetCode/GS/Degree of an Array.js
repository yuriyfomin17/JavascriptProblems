/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity is O(N) where N is the length of nums. Every loop is through O(N) items with O(1) work inside the for block
    // Space COmplexity is O(N) used by left, right and count
const findShortestSubArray = function (nums) {
    const right = {}
    const count = {}
    const left = {}
    debugger
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i]
        if (left[x] === undefined) {
            left[x] = i
        }
        right[x] = i
        count[x] = (count[x] || 0) + 1
    }

    let answer = nums.length
    let degree = Math.max(...Object.values(count))
    for(let[key, value] of Object.entries(count)){
        if(value===degree){
            answer = Math.min(answer, right[key]-left[key]+1)
        }
    }
    return answer
};
console.log(
    findShortestSubArray(
        [1,2,2,3,1])
)
