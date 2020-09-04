// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
    const newArr = str.split("")
    const resultArr = []
    newArr.map(function (el, index) {
        if (index !== 0) {

            if (el === "-" || el === "_") {
                resultArr.push(newArr[index + 1].toUpperCase())
                newArr.splice(index + 1, 1)
            } else {
                resultArr.push(el.toLowerCase())
            }
        } else {
            resultArr.push(el.toUpperCase())
        }

    })
    return resultArr.reduce((acc, val) => acc + val, "")
}

console.log(toCamelCase("The_Stealth_Warrior"))
