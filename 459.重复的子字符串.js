/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    /**
     * 时间复杂度O(N²)，空间复杂度O(1)
     */
    // const len = s.length
    // // 最小重复次数为2，即中点。
    // // 在循环中都没有找到重复的，代表没有重复子串
    // for (let i = 1; i * 2 <= len; i++) {
    //     // 重复因此一定是倍数关系
    //     if (len % i === 0) {
    //         let match = true
    //         for (let j = i; j < len; j++) {
    //             if (s.charAt(j) !== s.charAt(j - i)) {
    //                 match = false
    //                 break
    //             }
    //         }
    //         if (match) {
    //             return true
    //         }
    //     }
    // }
    // return false
    /**
     * 两串相加，去头去尾查找是否存在
     */
    const newStr = (s + s).slice(1, (s + s).length - 1)
    // return newStr.includes(s)
    /**
     * KMP，时间复杂度O(N),空间复杂度O(N)
     */
    /**
     * 
     * @param {String} s1 长串
     * @param {String} s2 短串
     */
    const KMP = (s1, s2) => {
        if (!s1 || !s2) return -1
        const arr1 = s1.split('')
        const arr2 = s2.split('')
        const next = getNext(arr2)
        let i1 = 0, i2 = 0
        while (i1 < arr1.length && i2 < arr2.length) {
            if (arr1[i1] === arr2[i2]) {
                i1++
                i2++
            } else if (next[i2] === -1) {
                i1++
            } else {
                i2 = next[i2]
            }
        }
        return i2 === arr2.length ? i1 - i2 : -1
    }
    /**
     * 
     * @param {String[]} arr2 
     */
    const getNext = (arr2) => {
        if (arr2.length === 1) return [-1]
        const next = new Array(arr2.length)
        next[0] = -1
        next[1] = 0
        let i = 2, num = 0
        while (i < arr2.length) {
            if (arr2[i - 1] === arr2[num]) {
                next[i++] = ++num
            } else if (num > 0) {
                num = next[num]
            } else {
                next[i++] = 0
            }
        }
        return next
    }
    return KMP(newStr, s) !== -1
};
// @lc code=end

