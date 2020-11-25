/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Time Complexity is O(n1 + n2) where n1 is the length of nums1 and n2 is the length of nums2
// Space Complexity is O(N) where N is the size of dictionary
const intersection = function (nums1, nums2) {
    const dict = {}

    nums1.map(el => {
        if(!dict[el]){
            dict[el] = 1
        }
    })

    const result = []

    nums2.map(el=>{
        if(dict[el]){
            result.push(el)
            delete dict[el]
        }
    })
    return result
};
console.log(
    intersection([4,9,5], [9,4,9,8,4])

)


