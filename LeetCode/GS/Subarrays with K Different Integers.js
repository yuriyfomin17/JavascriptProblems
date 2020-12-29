var subarraysWithKDistinct = function(A, K) {
    return (atMostK(A, K) - atMostK(A, K - 1));
};

function atMostK(A, K) {
    let count = {};
    let maxArr = 0, windowStart = 0;

    for (let windowEnd = 0; windowEnd < A.length; windowEnd++) {
        const rightInt = A[windowEnd];

        if (!(rightInt in count)) {
            count[rightInt] = 0;
        }

        if (count[rightInt] === 0) {
            K -= 1;
        }
        count[rightInt] += 1;

        while (K < 0) {
            const leftInt = A[windowStart];
            count[leftInt] -= 1;
            if (count[leftInt] === 0) {
                K += 1;
            }
            windowStart += 1;        }
        maxArr += windowEnd - windowStart + 1;
    }

    return maxArr;
}