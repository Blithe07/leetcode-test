/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // let result = ''
    // // 找到最短的字符串长度
    // const minStrLen = Math.min(...strs.map(item => item.length))
    // // 找到最短字符串(可能存在多个最短长度的串，取一个进行比较即可)
    // let minStr = strs.find(item => item.length === minStrLen)
    // while (minStr.length) {
    //     if (strs.some(item => !item.startsWith(minStr))) {
    //         // 有一个不包含最短串
    //         minStr = minStr.slice(0, minStr.length - 1)
    //         continue
    //     }
    //     result = minStr
    //     break
    // }
    // return result
    /**
     * 优化查询最短字符串时间
     */
    if (!strs.length) return ''
    let minLenStr = strs[0]
    for (let i = 1, len = strs.length; i < len; i++) {
        if (minLenStr.length > strs[i].length) {
            minLenStr = strs[i]
        }
    }
    while (minLenStr.length) {
        if (strs.some(item => !item.startsWith(minLenStr))) {
            minLenStr = minLenStr.slice(0, minLenStr.length - 1)
            continue
        }
        break
    }
    return minLenStr
};
// @lc code=end