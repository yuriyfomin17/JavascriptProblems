var isMatch = function(s, p) {
    const dp = Array.from({ length: s.length+1 }, () => [false]);
    dp[0][0] = true;

    // fill first row
    for(let i = 1; i <= p.length; i++) {
        if(p[i-1] === '*') dp[0][i] = dp[0][i-2];
        else dp[0][i] = false;
    }

    for(let r = 1; r <= s.length; r++) {
        for(let c = 1; c <= p.length; c++) {

            if(p[c-1] === '*') {

                if(p[c-2] === s[r-1] || p[c-2] === '.') {
                    dp[r][c] = dp[r][c-2] || dp[r-1][c];
                } else dp[r][c] = dp[r][c-2];

            } else if(p[c-1] === s[r-1] || p[c-1] === '.') {

                dp[r][c] = dp[r-1][c-1];

            } else dp[r][c] = false;
        }
    }
    return dp[s.length][p.length];
};