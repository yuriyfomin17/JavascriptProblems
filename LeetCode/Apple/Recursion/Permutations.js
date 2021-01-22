/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute1 = function (nums) {
    debugger
    const output = [];
    /**
     * The goal is break down the problem by finding permutations in subarrays.
     * So we will maintain a subarray of fixed elements and a subarray for
     * exploring permutations.
     *
     *                  [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
     * [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
     *                  [3], [1, 2]    [2, 1], [1]    [2, 1, 3]
     *                                 [2, 3], [1]    [2, 3, 1]
     *                                 [3, 1], [2]    [3, 1, 2]
     *                                 [3, 2], [1]    [3, 2, 1]
     */
    const dfs = (curr, rest) => {
        // base case. Found a permutation because there's nothing else to explore.
        if (rest.length === 0) {
            output.push(curr);
            return;
        }
        for (let i = 0; i < rest.length; i++) {
            dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
        }
    }
    dfs([], nums);

    return output;
};

console.log(
    permute1(
        [1, 2, 3]
    )
)

var permute = function (nums) {
    let res = [], used = new Array(nums.length).fill(false);

    function permuteHelper(depth, used, cur) {
        if (depth === nums.length) {
            res.push(cur.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i] === false) { // nums[i] is already being used
                cur.push(nums[i]);
                used[i] = true;

                // move to the next depth
                permuteHelper(depth + 1, used, cur);

                // backtrack to previous state
                cur.pop();
                used[i] = false; // nums[i] is no more being used
            }
        }
    }

    permuteHelper(0, used, []);
    return res;
    // Time Complexity: O(N!)
    // Space Complexity: O(N); our function call stack will go as deep as the number of elements to permute, and since
    // in this question we use all elements (N) to permute, the space complexity is O(N)
};


