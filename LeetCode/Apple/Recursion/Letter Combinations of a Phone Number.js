/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    const dict = {
        0: "",
        1: "",
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    const set = new Set()
    const helper = (currArr) => {
        if(currArr.length===1){
            return currArr[0]
        }

    }
    const arr = digits.split('')

};