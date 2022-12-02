/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    let minRow = m, minCol = n
    for (const [row, col] of ops) {
        minRow = Math.min(minRow, row)
        minCol = Math.min(minCol, col)
    }
    return minRow * minCol
};
// @lc code=end

