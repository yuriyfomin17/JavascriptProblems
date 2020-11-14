const fibbonaci = (n, memo) => {
    debugger
    if (n === 0 || n === 1) {
        return n
    }
    if (!memo[n]) {
        memo[n] = fibbonaci(n - 1, memo) + fibbonaci(n - 2, memo)

    }
    return memo[n]


}
console.log(
    fibbonaci(5, {})
)
