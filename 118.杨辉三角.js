/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    /**
     * 根据前一行结果计算
     */
    // const result = []
    // for (let i = 0; i < numRows; i++) {
    //     const row = new Array(i + 1).fill(1)
    //     // 从第三行才进行计算
    //     for (let j = 1; j < row.length - 1; j++) {
    //         row[j] = result[i - 1][j - 1] + result[i - 1][j]
    //     }
    //     result.push(row)
    // }
    // return result
    /**
     * 根据错一位再逐个相加计算
     * 当前行 【1，2，1】
     * 下一行为 0，1，2，1 + 1，2，1，0
     */
    const result = [[1]]
    for (let i = 1; i < numRows; i++) {
        const a = [0, ...result[i - 1]]
        const b = [...result[i - 1], 0]
        result[i] = []
        for (let j = 0; j < a.length; j++) {
            result[i].push(a[j] + b[j])
        }
    }
    return result
};
// @lc code=end