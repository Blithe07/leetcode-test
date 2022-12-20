/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    const map = new Map()
    const reg = /[a-zA-Z]/
    for (const str of licensePlate) {
        if (reg.test(str)) {
            const lowStr = str.toLowerCase()
            map.set(lowStr, map.get(lowStr) + 1 || 1)
        }
    }
    words.sort((a, b) => a.length - b.length)
    for (const word of words) {
        const tmpMap = new Map(map)
        for (const w of word) {
            if (tmpMap.has(w)) {
                const target = tmpMap.get(w)
                if (target === 1) {
                    tmpMap.delete(w)
                } else {
                    tmpMap.set(w, target - 1)
                }
            }
        }
        if (tmpMap.size === 0) {
            return word
        }
    }
};
// @lc code=end

