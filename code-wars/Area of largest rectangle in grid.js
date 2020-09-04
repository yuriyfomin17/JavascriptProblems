// You are given a 2D array matrix of 0s and 1s and your task is
// to find the area of the largest rectangle which can be placed
// on top of a group of adjacent 1s.

function largestRectangleArea(histogram) {
    const stack = [-1]
    let maxArea = 0
    for (let i = 0; i < histogram.length; ++i) {
        // we are saving indexes in stack that is why we comparing last element in stack
        // with current height to check if last element in stack not bigger then
        // current element
        while (stack[stack.length - 1] !== -1 && histogram[stack[stack.length - 1]] >= histogram[i]) {
            let lastIndex = stack.pop()
            maxArea = Math.max(maxArea, histogram[lastIndex] * (i - stack[stack.length - 1] - 1))
        }
        stack.push(i)
    }
    // we went through all elements of heights array
    // let's check if we have something left in stack

    while (stack[stack.length - 1] !== -1) {
        let lastIndex = stack.pop()
        maxArea = Math.max(maxArea, histogram[lastIndex] * (histogram.length - stack[stack.length - 1] - 1))
    }
    return maxArea
}



function solution(A) {
    const newArr = []
    let maxArea = 0
    A.map(function (el, index) {
        for (let i = 0; i < el.length; ++i) {
            if (index === 0) {
                newArr.push(el[i])
            } else {
                if (el[i] === 0) {
                    newArr[i] = 0
                } else {
                    newArr[i] = newArr[i] + el[i]
                }
            }

        }
        maxArea = Math.max(maxArea, largestRectangleArea(newArr))

    })
    return maxArea
}
largestRectangleInGrid([ [ 1, 0, 1, 1, 1 ],
    [ 0, 1, 1, 0, 1 ],
    [ 0, 1, 1, 0, 1 ],
    [ 0, 1, 1, 0, 1 ] ])