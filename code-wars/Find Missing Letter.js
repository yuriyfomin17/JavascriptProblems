// #Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input
// and that returns the missing letter in the array.
//You will always get an valid array.
// And it will be always exactly one letter be missing. T
// he length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:
//
//['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
//["a","b","c","d","f"] -> "e"
//["O","Q","R","S"] -> "P"

function findMissingLetter(array) {
    let missingCode;
    console.log(`Yuiry`)
    array.map((function (el, index) {
        if (index < array.length - 1) {
            if (el.codePointAt(0) + 1 !== array[index + 1].codePointAt(0)) {
                missingCode = el.codePointAt(0) + 1
            }

        }
    }))
    return String.fromCodePoint(missingCode)
}

findMissingLetter(['a', 'b', 'c', 'd', 'f'])
