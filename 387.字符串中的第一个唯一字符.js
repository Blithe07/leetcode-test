/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (map.has(ch)) {
            map.set(ch, -1)
            continue
        }
        map.set(ch, i)
    }
    for (const [key, value] of map) {
        if (value !== -1) {
            return value
        }
    }
    return -1
};
// @lc code=end

