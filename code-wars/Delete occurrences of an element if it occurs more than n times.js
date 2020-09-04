// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering.
// For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would
// lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// deleteNth ([1,1,1,1],2) // return [1,1]
//
// deleteNth ([20,37,20,21],1) // return [20,37,21]

function deleteNth(arr, n) {
    const copyArr = arr.slice()
    let result = copyArr
    copyArr.map(function (el, index) {


        let totalNumber = copyArr.filter(element => element === el)
        for(let i =0; i<totalNumber.length-n; ++i){
            let indexToDelete = copyArr.lastIndexOf(el)
            copyArr.splice(indexToDelete, 1)
        }
    })
    return result
}

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))