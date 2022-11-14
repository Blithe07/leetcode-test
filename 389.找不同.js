/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    /**
     * 哈希表
     * 时间复杂度O(t),空间复杂度O(s)
     */
    // const map = new Map()
    // for (let i = 0; i < s.length; i++) {
    //     const element = s[i];
    //     if (map.has(element)) {
    //         const num = map.get(element)
    //         map.set(element, num + 1)
    //     } else {
    //         map.set(element, 1)
    //     }
    // }
    // for (let i = 0; i < t.length; i++) {
    //     const element = t[i];
    //     if (!map.has(element)) {
    //         return element
    //     }
    //     const num = map.get(element)
    //     map.set(element, num - 1)
    //     if (num === 1) map.delete(element)
    // }
    /** 
     * 位运算，用异或得到唯一值
     * 时间复杂度O(t),空间复杂度O(1)
     */
    let ret = 0;
    for (const ch of s) {
        ret ^= ch.charCodeAt();
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt();
    }
    return String.fromCharCode(ret);
};
// @lc code=end

