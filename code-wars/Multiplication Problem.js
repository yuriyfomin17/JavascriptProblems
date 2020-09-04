// Your task, is to create NxN multiplication table, of size provided in parameter.
//for example, when given size is 3:

multiplicationTable = function (size) {
    const matrix = []
    let result;
    for (let row = 0; row < size; ++row) {
        let currRow = []
        for (let column = 0; column < size; ++column) {
            currRow.push((column + 1) * (row + 1))
        }
        matrix.push(currRow)
    }
    return matrix
}
console.log(multiplicationTable(3))
