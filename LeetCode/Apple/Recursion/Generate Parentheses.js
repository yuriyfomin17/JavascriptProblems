const generateParenthesis = function (n) {
    let res = [];
    debugger
    function permute(open, close, cur) {
        if (cur.length === 2 * n) {
            res.push(cur);
            return;
        }
        if (open > 0) {
            permute(open - 1, close + 1, cur + "(");
        }
        if (close > 0) {
            permute(open, close - 1, cur + ")");
        }
    }

    permute(n, 0, "");
    return res;
    // Space Complexity: O(2n) = O(n); call stack
};

console.log(
    generateParenthesis(3)
)