let alienOrder = (words) => {
    let graph = {},
        incoming = {};

    // initialize empty graph
    for (let word of words) {
        for (let char of word) {
            graph[char] = new Set();
            incoming[char] = 0;
        }
    }

    // build graph
    for (let i = 1, len = words.length; i < len; i++) {
        let first = words[i - 1];
        let second = words[i];
        let min = Math.min(first.length, second.length);
        let allSame = true;
        for (let j = 0; j < min; j++) {
            let x = first[j];
            let y = second[j];
            if (x !== y) {
                allSame = false;
                if (!graph[x].has(y)) {
                    graph[x].add(y);
                    incoming[y]++;
                }
                break;
            }
        }
        // fast path => first word smaller with all characters same
        if (allSame && first.length > second.length) return '';
    }

    // BFS with 0 incoming first
    let str = '',
        queue = [];
    for (let char in incoming) {
        if (incoming[char] === 0) queue.push(char);
    }

    while (queue.length) {
        const char = queue.shift();
        str += char;
        for (let next of graph[char]) {
            incoming[next]--;
            if (incoming[next] === 0) {
                queue.push(next);
            }
        }
    }

    return str.length === Object.keys(graph).length ? str : '';
};