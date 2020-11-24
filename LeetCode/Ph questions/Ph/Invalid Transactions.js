var invalidTransactions = function (transactions) {
    const invalid = new Set();
    const info = [];
    // create info arr: each element contains an obj with name, time, price, city, & raw string of input
    for (let trans of transactions) {
        let [name, time, price, city] = trans.split(",");
        info.push({name, time, price, city, raw: trans});
    }
    // sort ascending times
    info.sort((a, b) => Number(a.time) - Number(b.time));


    for (let i = 0; i < info.length - 1; i++) {
        let curr = info[i];
        let next = i + 1;

        // add to invalid if price > 1000
        if (curr.price > 1000) {
            invalid.add(curr.raw)
        }
        // add to invalid if price > 1000
        if (info[next].price > 1000) {
            invalid.add(info[next].raw)
        }

        // add elements to invalid if (within 60 time of each other, diff city, same name)

        while (next < info.length && (info[next].time - curr.time <= 60)) {
            if (curr.name === info[next].name && curr.city !== info[next].city) {
                invalid.add(curr.raw);
                invalid.add(info[next].raw)
            }
            next++;
        }
    }
    return Array.from(invalid);
};
console.log(
    invalidTransactions(["alice,20,800,mtv","alice,50,1200,mtv"])
)
