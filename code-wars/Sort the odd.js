// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
//
// Example
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
    // Return a sorted array.
    let oddArr = []
    array.map(function (el, index) {
        if (el % 2 !== 0) {
            oddArr.push(el)
            array[index] = undefined
        }
    })
    oddArr.sort(function (a, b) {
        if(a>b){
            return 1
        }else{
            return -1
        }
    })
    let indexOdd = 0
    array.map(function (el, indexEven) {
        if(el===undefined){
            array[indexEven] = oddArr[indexOdd]
            ++indexOdd
        }
    })
    return array
}