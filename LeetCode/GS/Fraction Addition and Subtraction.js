
// Time Complexity is O(nlog(x)). Euclidean GCD algorithm takes O(log(ab)) time for finding gcd
// of two numbers a and b. Here n refers to the number of fractions in the input string and x is the
// maximum possible values of the denominator
// Space complexity is O(n)
const fractionAddition = function (expression) {
    if (expression[0] === '-') expression = '0/1' + expression;
    const terms = expression.split(/[+-]/g);
    const ops = '+' + expression.replace(/[^+-]/g, '');
    const nums = [], dens = [];
    for (let term of terms) {
        let t = term.split('/');
        nums.push(parseInt(t[0]));
        dens.push(parseInt(t[1]));
    }
    const lcm = LCM(dens);
    const numSum = nums.reduce((sum, num, i) => sum + (+(ops[i] === '+') || -1) * num * lcm / dens[i], 0);
    const gcd = Math.abs(GCD(numSum, lcm));
    return (numSum / gcd) + '/' + (lcm / gcd);
};

function LCM(arr) {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res = (arr[i] * res) / GCD(arr[i], res);
    }
    return res;
}

function GCD(a, b) {
    if (b === 0) return a;
    return GCD(b, a % b);
}