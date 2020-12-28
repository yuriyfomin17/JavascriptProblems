// Time Complexity is O(N^2)
// Space Complexity is O(1)
const numTeams = rating => {
    let ans = 0;

    // 'i' is the index of Middle
    for (let i = 1; i < rating.length - 1; i++) {
        let descLeft = 0;
        let descRight = 0;
        let ascLeft = 0;
        let ascRight = 0;

        // Check for Left
        for (let j = 0; j < i; j++) {
            if (rating[j] > rating[i]) descLeft++;
            if (rating[j] < rating[i]) ascLeft++;
        }

        // Check for Right
        for (let j = i + 1; j < rating.length; j++) {
            if (rating[j] < rating[i]) descRight++;
            if (rating[j] > rating[i]) ascRight++;
        }

        ans += descLeft * descRight + ascLeft * ascRight;
    }

    return ans;
};