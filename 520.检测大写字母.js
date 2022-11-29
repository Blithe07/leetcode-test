/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    const len = word.length
    /**
     * 
     * @param {string} val
     * @return {boolean} 
     */
    const isUpperWord = (val) => {
        return val.charCodeAt() - 'a'.charCodeAt() < 0
    }
    let count = 0
    for (let i = 0; i < len; i++) {
        if (isUpperWord(word[i])) {
            count++
        }
    }
    return count === 0 || count === word.length || (count === 1 && isUpperWord(word[0]))
};
// @lc code=end

console.log(detectCapitalUse('FlaG'));