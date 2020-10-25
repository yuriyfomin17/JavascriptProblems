const decodeString = function (s) {
    if(s!==''){
        debugger
        let arrString = s.split('')
        const stack = []
        for (let i = 0; i < arrString.length; i++) {
            if (arrString[i] !== ']') {
                stack.push(arrString[i])
            } else {
                let result = ''
                while (stack[stack.length - 1] !== '[' && stack.length !== 0) {
                    let el = stack.pop()
                    result = el +result
                }
                stack.pop()
                let number = ''
                while (!isNaN(Number(stack[stack.length-1]))){
                    number =  stack.pop() +number
                }
                result = result.repeat(Number(number))

                stack.push(result)
            }

        }
        return stack.reduce((acc,val)=>acc+val)

    }
    return ''
};
console.log(decodeString("100[leetcode]"))
