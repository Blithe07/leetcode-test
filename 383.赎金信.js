/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false
    const map = new Map()
    for (const ch of magazine) {
        if (map.has(ch)) {
            const num = map.get(ch)
            map.set(ch, num + 1)
        } else {
            map.set(ch, 1)
        }
    }
    for (const item of ransomNote) {
        if (!map.has(item)) {
            return false
        }
        const num = map.get(item)
        map.set(item, num - 1)
        if (num === 1) { map.delete(item) }
    }
    return true
};
// @lc code=end

