const intersection = function (nums1, nums2) {
    const dict = {}
    debugger
    nums1.map(el => {
        if (!dict[el]) {
            dict[el] = 1
        }
    })

    const result = []

    nums2.map(el => {
        if (dict[el]) {
            result.push(el)
            delete dict[el]
        }
    })
    return result
};

console.log(
    intersection(
        [1, 2, 2, 1], [2, 2]
    )
)