/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    if (turnedOn > 8) return []
    const result = []
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            // h中1的个数+m中1的个数 === turnedOn
            if (h.toString(2).split('0').join('').length + m.toString(2).split('0').join('').length === turnedOn) {
                result.push(h + ":" + (m < 10 ? '0' + m : m))
            }
        }
    }
    return result
};
// @lc code=end

