const triangles = (array) => {
    const result = []
    debugger
    for (let i = 0; i < array.length; i++) {
        let [a, b, c] = array[i].split('')
        a = Number(a)
        b = Number(b)
        c = Number(c)
        if (a + b > c && a + c > b && b + c > a) {
            let set = new Set()
            set.add(a)
            set.add(b)
            set.add(c)
            if(set.size===1){
                result.push('Equilateral')
            }else if(set.size===2){
                result.push('Isosceles')
            }else {
                result.push('None of these')

            }
        }else {
            result.push('None of these')

        }
    }
    return result
}

console.log(
    triangles(['221','333','345','113'])
)