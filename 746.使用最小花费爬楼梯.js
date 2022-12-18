/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let prev = 0, cur = 0;
    const n = cost.length
    for (let i = 2; i < n; i++) {
        const next = Math.min(cur + cost[i - 1], prev + cost[i - 2])
        prev = cur
        cur = next
    }
    return cur
};
// @lc code=end

