/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1 比特与 2 比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let i = 0; const n = bits.length
    while (i < n - 1) {
        i += bits[i] + 1
    }
    return i === n - 1
};
// @lc code=end

