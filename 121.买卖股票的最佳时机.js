/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    /**
     * 时间复杂度：O(N²)
     * 数组长度过长，leetcode运行超时
     */
    // let minProfit = 0
    // const len = prices.length
    // for (let i = 0; i < len - 1; i++) {
    //     for (let j = i + 1; j < len; j++) {
    //         if (prices[j] - prices[i] > minProfit) {
    //             minProfit = prices[j] - prices[i]
    //         }
    //     }
    // }
    // return minProfit
    /**
     * 贪心：遇到小的替换最小买入值，遇到比大的进行一次利润计算
     */
    let maxProfit = 0
    let cur = prices[0]
    for (const p of prices) {
        if (p < cur) {
            cur = p
            continue
        }
        if (p > cur) {
            maxProfit = Math.max(maxProfit, p - cur)
        }
    }
    return maxProfit
};
// @lc code=end
