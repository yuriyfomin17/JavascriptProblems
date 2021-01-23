/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Time COmplexity is O(N*2^N) to generate all subsets and then copy them into output list
    // Space Complexity is O(N*2^N). This is exactly number of solutions for subsets multiplied by
    // number N of elements to keep for each subsets
const subsets = function (nums) {
    if (nums.length === 0) {
        return []
    }
    debugger
    const result = []
    const queue = [nums]
    const dict = new Map()
    while (queue.length) {
        let nums = queue.shift()

        result.push(nums)


        for (let i = 0; i < nums.length; i++) {
            const copyArr = nums.slice()
            copyArr.splice(i, 1)
            let key = copyArr.reduce((acc, val) => {
                if(val===0){
                    return acc + "*"
                }
                return acc + val
            }, '')
            if (!dict.has(key)) {
                queue.push(copyArr)
                dict.set(key,1)
            }
        }
    }
    return result
};

console.log(
    subsets(
        [1,2,0]
    )
)

var subsets = function(nums) {
    let res = [];
    function dfs(depth, start, cur) {
        res.push(cur.slice());
        for (let i = start; i < nums.length; i++) {
            cur.push(nums[i]);

            dfs(depth+1, i+1, cur);

            cur.pop();
        }
        return;
    }
    dfs(0, 0, []);
    return res;
    // Time Complexity: O(n * 2^n)
    // Space Complexity: O(n * 2^n)
};