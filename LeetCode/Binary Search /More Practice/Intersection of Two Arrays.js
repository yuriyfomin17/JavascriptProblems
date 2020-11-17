/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Time complexity is O(N1) + O(N2) where N1 and N2 are the size of nums1 and nums2
// Space Complexity is O(N1) where N1 is the size of first arr
const intersection = function (nums1, nums2) {
    const dict = {}
    nums1.map(el => {
        if (!dict[el]) {
            dict[el] = 1
        }
    })
    const result = []
    nums2.map(el=>{
        if(el in dict){
            result.push(el)
            delete dict[el]
        }
    })
    return result

};