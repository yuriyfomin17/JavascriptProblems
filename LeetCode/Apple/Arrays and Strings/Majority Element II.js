/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
    const dict = {}
    const result = new Set()
    const length = nums.length
    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]] === undefined) {
            dict[nums[i]] = 1

        } else {
            dict[nums[i]] += 1

        }
        if(dict[nums[i]]>length/3){
            result.add(nums[i])
        }
    }
    return Array.from(result)
};

console.log(
    majorityElement([3,2,3])
)
//Boyer-Moore Voting Algorithm
// TIme complexity is O(N) where N is the size of nums.
// We first go through nums looking for the first and second potential candidates
// Space Complexity is O(1) since we only have foru variables for holding two potential candidates and two counters
// Even the returning array is at most 2 elements

var majorityElement = function(nums) {

    let count1 = 0;
    let count2 = 0;
    let candidate1 = null;
    let candidate2 = null;
    let n = nums.length;
    let candidates = [];

    for(let num of nums) {
        if(candidate1 !== null && num === candidate1) {
            count1+=1
        } else if (candidate2 !== null && num === candidate2) {
            count2+=1
        } else if (count1 === 0) {
            candidate1 = num;
            count1+=1
        } else if (count2 === 0) {
            candidate2 = num;
            count2+=1
        } else {
            count1-=1
            count2-=1
        }

    }

    count1 = 0;
    count2 = 0;
    for(let num of nums) {
        if(candidate1 !== null && num === candidate1) count1+=1;
        if(candidate2 !== null && num === candidate2) count2+=1;
    }

    if(count1 > n/3) {
        candidates.push(candidate1);
    }

    if(count2 > n/3) {
        candidates.push(candidate2);
    }
    return candidates;
};