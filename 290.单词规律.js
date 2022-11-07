/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const strArr = s.split(' ')
    if (pattern.length !== strArr.length) return false
    const word2ch = new Map()
    const ch2word = new Map()
    for (let i = 0; i < pattern.length; i++) {
        const word = strArr[i]
        const ch = pattern[i]
        if (ch2word.has(ch) && ch2word.get(ch) !== word) {
            return false
        } else if (word2ch.has(word) && word2ch.get(word) !== ch) {
            return false
        } else {
            ch2word.set(pattern[i], strArr[i])
            word2ch.set(strArr[i], pattern[i])
        }
    }
    return true
};
// @lc code=end

