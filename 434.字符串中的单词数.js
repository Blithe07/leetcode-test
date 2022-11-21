/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let segmentNum = 0
    s = s.trim()
    let isSpace = false
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ' && !isSpace) {
            segmentNum++
            isSpace = true
        }
        if (s[i] !== ' ' && isSpace) {
            isSpace = false
        }
    }
    return s ? segmentNum + 1 : segmentNum
};
// @lc code=end

