/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    // 贪心，从小排到大
    g.sort((a, b) => { return a - b })
    s.sort((a, b) => { return a - b })
    let gI = 0, sI = 0
    let result = 0
    while (gI < g.length && sI < s.length) {
        if (s[sI] >= g[gI]) {
            sI++
            gI++
            result++
        } else {
            sI++
        }
    }
    return result
};
// @lc code=end

