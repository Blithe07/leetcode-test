/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    /**
     * 时间复杂度：O(s+t)，空间复杂度：O(1)
     */
    // const sLen = s.length, tLen = t.length
    // let i = 0, j = 0
    // while (i < sLen && j < tLen) {
    //     if (s[i] === t[j]) {
    //         i++
    //     }
    //     j++
    // }
    // return i === sLen    
    /**
     * 动态规划，减少t找到下个字符的时间
     */
    const sLen = s.length, tLen = t.length
    const f = Array.from(new Array(tLen + 1), () => new Array(26).fill(tLen))
    // t字符串从后往前遍历，也是f二维数组从后往前遍历的过程
    for (let i = tLen - 1; i >= 0; i--) {
        for (let j = 0; j < 26; j++) {
            // 当遇到t中指定索引字符时，更新当前二维数组中的值为当前索引
            // 以此来达到快速寻找t中指定字符
            if (t.charCodeAt(i) == j + 'a'.charCodeAt())
                f[i][j] = i;
            // 找不到则使用下方的数据值
            else
                f[i][j] = f[i + 1][j];
        }
    }
    let curIndex = 0;
    for (let i = 0; i < sLen; i++) {
        // 二维数组当前位置值为t字符串的长度，代表找不到s字符串某个值。
        // 因此无法从t中匹配到s，返回false
        if (f[curIndex][s.charCodeAt(i) - 'a'.charCodeAt()] == tLen) {
            return false;
        }
        // 二维数组中在curIndex行中找到s[i]的值，也就是第一次出现该字符的索引
        // 来到下一次要寻找的字符串，会跳过非必要搜索的行
        curIndex = f[curIndex][s.charCodeAt(i) - 'a'.charCodeAt()] + 1;
    }
    return true;
};
// @lc code=end

