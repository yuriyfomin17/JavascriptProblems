/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
    const newArr = s.split('')
    let count = 0
    debugger
    for (let i = count; i < newArr.length; i++) {
        if (newArr[i] !== ' ') {
            count = i
            while (newArr[count] !== ' ' && count < newArr.length) {
                count += 1
            }
            let countPrevious = count
            count -= 1
            let size = count - i
            for (let k = i; k <= i + size / 2; k++) {
                let previous = newArr[k]
                newArr[k] = newArr[count]
                newArr[count] = previous
                count -= 1
            }
            i = countPrevious
        }
    }
    return newArr.reduce((acc, val) => acc + val, '')
};
console.log(reverseWords("Let's take LeetCode contest"))
