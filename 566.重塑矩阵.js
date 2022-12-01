/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    const x = mat.length
    const y = mat[0].length
    if (x * y !== r * c) {
        return mat
    }
    const result = Array.from(new Array(r), () => new Array(c))
    for (let i = 0; i < x * y; i++) {
        result[Math.floor(i / c)][i % c] = mat[Math.floor(i / y)][i % y]
    }
    return result
};
// @lc code=end

