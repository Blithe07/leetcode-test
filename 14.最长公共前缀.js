/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = ''
    // 找到最短的字符串长度
    const minStrLen = Math.min(...strs.map(item => item.length))
    // 找到最短字符串(可能存在多个最短长度的串，取一个进行比较即可)
    let minStr = strs.find(item => item.length === minStrLen)
    while (minStr.length) {
        if (strs.some(item => !item.startsWith(minStr))) {
            // 有一个不包含最短串
            minStr = minStr.slice(0, minStr.length - 1)
            continue
        }
        result = minStr
        break
    }
    return result
};
// @lc code=end