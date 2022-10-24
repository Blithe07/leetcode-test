/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const row = [1]
    for (let i = 1; i <= rowIndex; i++) {
        row.push(row[i - 1] * (rowIndex - i + 1) / i)
    }
    // data     rowIndex
    // 1           0        
    // 1 1         1
    // 1 2 1       2
    // 1 3 3 1     3
    // 1 4 6 4 1   4
    return row
};
// @lc code=end