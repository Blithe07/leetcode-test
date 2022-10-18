/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    /**
     * 正则
     const newStr = s.replace(/(\s)*$/, '')
     const matchArr = newStr.match(/\s(\w)*$/g)
     return matchArr ? matchArr[0].length - 1 : newStr.length
     */
    /** 反向遍历，时间：O(N),空间：O(1) */
    let index = s.length - 1
    while (s[index] === ' ') {
        index--
    }
    let wordLength = 0
    while (index >= 0 && s[index] !== ' ') {
        index--
        wordLength++
    }
    return wordLength
};
// @lc code=end