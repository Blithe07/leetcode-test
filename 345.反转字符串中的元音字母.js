/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const len = s.length, set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',])
    let newStr = new Array(len), left = 0, right = len - 1
    while (left <= right) {
        if (!set.has(s[left])) {
            newStr[left] = s[left++]
        } else {
            if (!set.has(s[right])) {
                newStr[right] = s[right--]
            } else {
                newStr[left] = s[right]
                newStr[right] = s[left]
                left++
                right--
            }
        }
    }
    return newStr.join('')
};
// @lc code=end
