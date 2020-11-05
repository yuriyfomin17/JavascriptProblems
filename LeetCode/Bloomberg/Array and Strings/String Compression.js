const compress = function (chars) {
    debugger
    let change = 0
    chars.map((el, index) => {
        let count = 0
        let removed

        while (chars[index + change] === el) {
            count += 1
            removed = chars.shift()
        }
        chars.unshift(count.toString(10))
        chars.unshift(removed)
        change += 2
    })
    return chars.length
};
compress(["a", "a", "b", "b", "c", "c", "c"])