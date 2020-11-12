/**
 * @param {string} s
 * @return {number}
 */

// Time complexity is O(n^3) since we iterating over string n *n*n times where n is th length of the string
// Space complexity is O(K) where K is the length of the dictionary. At most k can be equal to the length of the string
const lengthOfLongestSubstringBrute = function (s) {
    let maxSub = ''
    debugger
    let dict = {}
    for (let start = 0; start < s.length; start++) {
        for (let finish = start + 1; finish <= s.length; finish++) {
            let currString = ''
            for (let i = start; i <= finish; i++) {
                if (!dict[s.charAt(i)]) {
                    dict[s.charAt(i)] = 1
                    currString = currString + s.charAt(i)
                    if (currString.length > maxSub.length) {
                        maxSub = currString
                    }

                } else {
                    break
                }
            }
            dict = {}

        }
    }
    return maxSub.length
};

// Time complexity is O(N) since we iterate through the entire string at most once. And deletion and insertion process in dictionary is O(1)
// Space complexity is O(K) which is the size of the dictionary where K in worst cases will be the length of the string

const lengthOfLongestSubstring = function (s) {
    debugger
    if(s.length===0){
        return 0
    }

    let maxLength = 0
    let dict = {}
    let start = 0
    let finish = 0
    while (start < s.length && finish < s.length) {
        if (!dict[s.charAt(finish)]) {
            dict[s.charAt(finish)] = 1
            finish += 1
            maxLength = Math.max(maxLength, finish - start)
        } else {
            delete dict[s.charAt(start)]
            start+=1
        }
    }
    return maxLength
};

console.log(lengthOfLongestSubstring("pwwkew"))
var merge = function(nums1, m, nums2, n) {
    if (n === 0) return; // no need to do change anything

    let idx1 = m-1, idx2 = n-1, end = m+n-1;
    while (idx2 >= 0) {
        if (nums1[idx1] > nums2[idx2]) {
            // nums1[idx1] is greater than nums2[idx2]
            nums1[end] = nums1[idx1];
            idx1--;
        } else {
            // 1st case: nums1[idx1] is undefined
            // 2nd case: nums2[idx2] is greater than nums1[idx1]
            // 3rd case: nums2[idx2] is equal to nums1[idx1]
            nums1[end] = nums2[idx2];
            idx2--;
        }
        end--;
    }
    // Time Complexity: O(m+n)
    // Space Complexity: O(1)
};


