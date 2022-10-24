/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/\W|_/g, '').toLocaleLowerCase()
    console.log(s);
    let newStr = ''
    for (let i = s.length - 1; i >= 0; i--) {
        newStr += s[i]
    }
    return newStr === s
};
// @lc code=end