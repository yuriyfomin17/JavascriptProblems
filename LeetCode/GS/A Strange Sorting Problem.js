const strangeSortingProblem = (mapping, array) => {
    if (array.length === 0) {
        return []
    }

    const dict = {}
    debugger
    mapping.map((el, index) => {
        dict[el] = index
    })

    const helper = (a, b) => {
        a = a.split('')
        b = b.split('')
        let aString = a.reduce((acc, val) => {
            return acc + dict[Number(val)]
        }, '')
        let bString = b.reduce((acc, val) => {
            return acc + dict[Number(val)]
        }, '')
        return [Number(aString), Number(bString)]
    }

    array.sort(function (a, b) {
        let [aMapped, bMapped] = helper(a, b)
        if (aMapped >= bMapped) {
            return 1
        } else {
            return -1
        }
    })
    return array
}

console.log(
    strangeSortingProblem([2,1,4,8,6,3,0,9,7,5],['12','02','4', '023', '65', '83', '224', '50'] )
)

