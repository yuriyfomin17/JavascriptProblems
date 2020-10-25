//Time complexity: O(2^n). Size of recursion tree will be 2^n where n is the size of an array
//Space complexity: O(n). THe depth of the recursion tree can go up to n

const findTargetSumWays = function (nums, S) {
    let count = 0
    if (nums === undefined || nums.length === 0) return 1;
    if (S === null) return null;
    const calculateSum = (index, sum, target) => {
        if (index === nums.length) {
            if (sum === target) {
                count = count + 1
                return count
            }
        } else {
            calculateSum(index + 1, sum - nums[index], target)
            calculateSum(index + 1, sum + nums[index], target)
        }

    }

    calculateSum(0, 0, S)
    console.log(count)
    return count
}







