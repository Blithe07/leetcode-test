/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let A = 0
    let L = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            A++
            if (A === 2) {
                return false
            }
        }
        if (s[i] === 'L') {
            L++
            if (L === 3) {
                return false
            }
        } else {
            L = 0
        }
    }
    return true
};
// @lc code=end

