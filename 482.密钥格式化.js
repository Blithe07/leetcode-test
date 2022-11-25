/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    const newStr = s.split('-').join('')
    let i = newStr.length
    let ret = []
    while (i > 0) {
        ret.push(i > k ? newStr.slice(i - k, i) : newStr.slice(0, i))
        i -= k
    }
    return ret.reverse().join('-').toUpperCase()
};
// @lc code=end

