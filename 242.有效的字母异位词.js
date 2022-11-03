/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    /** 
     * 时间O(N)，空间O(s.length)
     */
    if (s.length !== t.length) return false
    const obj = {}
    for (const str of s) {
        obj[str] ? obj[str] += 1 : obj[str] = 1
    }
    for (const str of t) {
        if (!obj[str]) return false
        obj[str] -= 1
        if (obj[str] < 0) return false
    }
    return true
    /**
     * 时间O(N*logN)，空间O(logN)
     */
    // return s.length === t.length && [...s].sort().join('') === [...t].sort().join('')
};
// @lc code=end
