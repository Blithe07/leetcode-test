/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let ans = []
    while (columnNumber > 0) {
        // 避免老六字母Z会转换成@
        const a0 = (columnNumber - 1) % 26 + 1
        ans.push(String.fromCharCode(a0 + 'A'.charCodeAt() - 1))
        columnNumber = Math.floor((columnNumber - a0) / 26)
    }
    return ans.reverse().join('')
};
// @lc code=end

