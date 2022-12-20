/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    /**
     * 时间复杂度O(n*m)，空间复杂度O(1)
     */
    // const row = matrix.length, col = matrix[0].length
    // for (let i = 1; i < row; i++) {
    //     for (j = 1; j < col; j++) {
    //         if (matrix[i][j] !== matrix[i - 1][j - 1]) {
    //             return false
    //         }
    //     }
    // }
    // return true
    /**
     * 时间复杂度O(n)，空间复杂度O(m)
     */
    for (let i = 1; i < matrix.length; i++) {
        let first = matrix[i - 1].slice(0, -1);
        let end = matrix[i].slice(1);
        if (JSON.stringify(first) !== JSON.stringify(end)) {
            return false;
        }
    }
    return true;
};
// @lc code=end

