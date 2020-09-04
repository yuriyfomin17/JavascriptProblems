function solution(A) {
    const obj = {}
    const set = new Set()
    for(let row =0 ; row<A.length; ++row){
        let currElem = A[row]
        for(let column = 0; column<currElem.length; ++column){
            set.add(currElem[column])
        }
    }
    return set.size
}