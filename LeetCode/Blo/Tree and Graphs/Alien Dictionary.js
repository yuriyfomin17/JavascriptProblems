
// Time Complexity is O(C) where C is the total length of all words in the input list
// Space Complexity is O(2*C + k) wince we store 2 dictionaries and k for queue where k is the current number of
// elements with incoming degree of 0
const alienOrder =  (words)=> {
    const incomingDegree = {}
    const orderChars = {}

    // Create Data Structure for graph
    for (let word of words) {
        for (let char of word) {
            if (!orderChars[char]) {
                orderChars[char] = new Set()
                incomingDegree[char] = 0
            }

        }
    }
    // build Graph
    for (let i = 1; i < words.length; i++) {
        let firstWord = words[i - 1]
        let secondWord = words[i]
        let minLength = Math.min(firstWord.length, secondWord.length)
        let allSame = true

        for (let k = 0; k < minLength; k++) {
            let firstChar = firstWord[k]
            let secondChar = secondWord[k]
            if (firstChar !== secondChar) {
                allSame = false
                if (!orderChars[firstChar].has(secondChar)) {
                    orderChars[firstChar].add(secondChar)
                    incomingDegree[secondChar] = incomingDegree[secondChar] + 1
                }
                break
            }
        }
        // fast path => first word smaller with all characters same
        if (allSame && firstWord.length > secondWord.length) return '';
    }
    const queue = []
    // BFS with 0 incoming first
    for (let [key, value] of Object.entries(incomingDegree)) {
        if (value === 0) {
            queue.push(key)
        }
    }

    let str = ''
    while (queue.length !== 0) {
        let firstElem = queue.shift()
        str = str + firstElem
        let currSet = orderChars[firstElem]
        for(let [char, value] of currSet.entries()){
            incomingDegree[char] = incomingDegree[char] -1
            if(incomingDegree[char]===0){
                queue.push(char)
            }
        }

    }
    return str.length === Object.keys(incomingDegree).length ? str : '';
}