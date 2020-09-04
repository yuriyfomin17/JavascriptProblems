// Write a function that takes a string of braces, and determines if the order of the braces is valid.
// It should return true if the string is valid, and false if it's invalid.
// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.
// Thanks to @arnedag for the idea!
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
// What is considered Valid?

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces) {
    //TODO
    const newArr = braces.split("")

    let finalResult = true;
    let index = 0
    while(finalResult && index< newArr.length) {
        let el = newArr[index]
        let search
        if (el === "[") {
            search = "]"
        }
        if (el === "(") {
            search = ")"
        }
        if (el === "{") {
            search = "}"
        }

        function searchElem(search, index, copy, result, n) {
            if (index > newArr.length || result === true) {

                return result
            } else {
                if (search === copy[index]) {
                    result = true
                    newArr.splice(index,1)
                }
                index = index +2
                return searchElem(search, index, copy, result, n)
            }

        }
        finalResult = searchElem(search, index+1, newArr, !finalResult, 0)
        index = index + 1
    }
    return finalResult

}

console.log(validBraces("(){}[]"))