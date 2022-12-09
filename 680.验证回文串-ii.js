/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    /**
     * 
     * @param {String} str 
     * @param {number} left 
     * @param {number} right 
     */
    const validate = (str, left, right) => {
        for (let i = left, j = right; i < j; i++, j--) {
            const c1 = str.charAt(left)
            const c2 = str.charAt(right)
            if (c1 !== c2) return false
        }
        return true
    }

    let left = 0, right = s.length - 1
    while (left < right) {
        const c1 = s.charAt(left)
        const c2 = s.charAt(right)
        if (c1 === c2) {
            left++
            right--
        } else {
            return validate(s, left, right - 1) || validate(s, left + 1, right)
        }
    }
    return true
};
// @lc code=end
