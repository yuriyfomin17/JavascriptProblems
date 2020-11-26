var countRoutes = function (locations, start, finish, fuel) {
    const mod = 10 ** 9 + 7;

    const waysToReach = new Array(locations.length).fill(0)
        .map(() => new Array(fuel + 1).fill(0));

    waysToReach[start][0] = 1;
    let waysToReachFinish = waysToReach[finish][0];

    for (let currFuel = 1; currFuel <= fuel; currFuel += 1) {
        for (let to = 0; to < locations.length; to += 1) {
            for (let from = 0; from < locations.length; from += 1) {
                if (from === to) continue;

                const distBetweenLocations = Math.abs(locations[to] - locations[from]);

                if (distBetweenLocations > currFuel) continue;

                const remFuel = currFuel - distBetweenLocations;

                waysToReach[to][currFuel] = (waysToReach[to][currFuel] + waysToReach[from][remFuel]) % mod;
            }
        }

        waysToReachFinish = (waysToReachFinish + waysToReach[finish][currFuel]) % mod;
    }

    return waysToReachFinish;
};