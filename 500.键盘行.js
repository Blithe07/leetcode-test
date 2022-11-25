/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const result = [];
    const wordIdx = "12210111011122000010020202";
    for (const word of words) {
        const row = wordIdx[word[0].toLowerCase().charCodeAt() - 'a'.charCodeAt()]
        let isValid = true
        for (const ch of word) {
            if (wordIdx[ch.toLowerCase().charCodeAt() - 'a'.charCodeAt()] !== row) {
                isValid = false
                break
            }
        }
        if (isValid) {
            result.push(word)
        }
    }
    return result;
};
// @lc code=end

