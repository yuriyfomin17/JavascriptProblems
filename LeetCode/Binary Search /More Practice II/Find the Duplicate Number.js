/**
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity is O(Nlog(N)) + O(N)=> O(Nlog(N)) since O(Nlog(N)) dominates acording to big O
// Space Complexity is O(1)
const findDuplicate = function (nums) {
    debugger
    nums.sort(function (a, b) {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            return nums[i]
        }
    }
};
findDuplicate([1, 3, 4, 2, 2])

/**
 * @param {number[]} nums
 * @return {number}
 */
// Time Complexity is O (N) since we iterate through each element
// Space Complexity is O(N) since we store elements in set
const findDuplicate = function (nums) {
    debugger
    const dict = {}
    for (let i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) {
            dict[nums[i]] = 1
        } else {
            return nums[i]
        }
    }
};
findDuplicate([1, 3, 4, 2, 2])
// Time Complexity is O(2N)=>O(N) where N is the number of elements in array
// Space Complexity is O(1) since we don't utilize any etra space
const findDuplicateH = function (nums) {
    let tortoise = nums[0]
    let hare = nums[0]
    while (true) {
        tortoise = nums[tortoise]
        hare = nums[nums[hare]]
        if(tortoise===hare){
            break
        }
    }
    tortoise = nums[0]
    while (tortoise!==hare){
        tortoise = nums[tortoise]
        hare = nums[hare]
    }
    return hare
};