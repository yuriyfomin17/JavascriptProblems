const meanderingArray = (array) => {
    array.sort(function (a, b) {
        if (a >= b) {
            return 1

        } else {
            return -1
        }

    })

    const result = []
    for (let i = 0; i < array.length / 2; i++) {
        let smallest = array[i]
        let largest = array[array.length - 1 - i]

        result.push(largest)
        result.push(smallest)
    }

    return result
}
console.log(
    meanderingArray([7, 5, 2, 7, 8, -2, 25, 25])
)

const meanderingArray2 = (array) => {
    const meandered = []
    array.sort(function (a, b) {
        if (a >= b) {
            return 1

        } else {
            return -1
        }

    })
    let half = array.length / 2
    if (half % 2 === 0) {
        half += 1
    }
    for (let i = 0; i < half; i++) {
        meandered.push(array[array.length - 1 - i])
        if(array.length - 1 - i!==i){
            meandered.push(array[i])
        }
    }
    if(array.length%2!==0){
        meandered.push(array[half])
    }
    return meandered
}
// console.log(
//     meanderingArray2([7, 5, 2, 7, 8, -2, 25, 25])
// )
