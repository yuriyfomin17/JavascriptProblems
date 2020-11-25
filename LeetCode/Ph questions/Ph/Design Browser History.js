
// Time Complexity is O(1)
// Space Complexity is O(N) where N is the current number of links

/**
 * @param {string} homepage
 */
const BrowserHistory = function (homepage) {
    this.position = 0
    this.pages = [homepage]
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    this.pages.length = this.position + 1 // clear all forward history
    this.pages.push(url)
    this.position = this.pages.length - 1

};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    const maxStepsBack = this.position
    if (steps <= maxStepsBack) {
        this.position = this.position - steps
        return this.pages[this.position]
    } else {
        this.position = 0
        return this.pages[this.position]
    }
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    const maxStepsForward = this.pages.length - 1 - this.position
    if (steps <= maxStepsForward) {
        this.position = this.position + steps
        return this.pages[this.position]
    } else {
        this.position = this.pages.length - 1
        return this.pages[this.position]
    }
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */