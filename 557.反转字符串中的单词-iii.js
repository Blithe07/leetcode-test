/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const result = []
    const len = s.length
    let i = 0
    while (i < len) {
        let start = i
        while (i < len && s[i] !== ' ') {
            i++
        }
        for (let p = start; p < i; p++) {
            result.push(s[start + i - p - 1])
        }
        while (i < len && s[i] === ' ') {
            result.push(' ')
            i++
        }
    }
    return result.join('')
};
// @lc code=end

