/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = function (S) {
    debugger
    if (S.length === 0 || !S) {
        return ''
    }
    const stack = []
    let removed = ''
    for (let i = 0; i < S.length; i++) {
        if (stack[stack.length - 1] !== S.charAt(i)) {
            stack.push(S.charAt(i))
        }else{
            removed = stack.pop()
        }
    }

    return stack.reduce((acc, val)=>{
        return acc+val
    },'')
};
console.log(
    removeDuplicates("aaaaaaaa")
)
