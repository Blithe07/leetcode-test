/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let result = 0
    // 已经读过的长度
    let readLen = 0
    // 从后往前读
    let curWord = s[s.length - 1]
    while (readLen !== s.length) {
        // 前一个罗马字符
        const prevWord = s[s.length - 2 - readLen]
        let word = curWord
        if ((curWord === 'V' && prevWord === 'I') || (curWord === 'X' && prevWord === 'I') || (curWord === 'L' && prevWord === 'X') || (curWord === 'C' && prevWord === 'X') || (curWord === 'D' && prevWord === 'C') || (curWord === 'M' && prevWord === 'C')) {
            word = prevWord + word
        }
        const { result: r, readLen: rl } = changeData(word)
        result += r
        readLen += rl;
        curWord = s[s.length - 1 - readLen]
        continue
    }
    return result
};
/**
 * 返回已读长度和最终结果
 * @param {string} value 
 * @return {object}
 */
const changeData = (value) => {
    let data = {
        readLen: 1,
        result: 0
    }
    switch (value) {
        case 'I':
            data = {
                ...data,
                result: 1
            }
            break
        case 'IV':
            data = {
                readLen: 2,
                result: 4
            }
            break
        case 'V':
            data = {
                ...data,
                result: 5
            }
            break
        case 'IX':
            data = {
                readLen: 2,
                result: 9
            }
            break
        case 'X':
            data = {
                ...data,
                result: 10
            }
            break
        case 'XL':
            data = {
                readLen: 2,
                result: 40
            }
            break
        case 'L':
            data = {
                ...data,
                result: 50
            }
            break
        case 'XC':
            data = {
                readLen: 2,
                result: 90
            }
            break
        case 'C':
            data = {
                ...data,
                result: 100
            }
            break
        case 'CD':
            data = {
                readLen: 2,
                result: 400
            }
            break
        case 'D':
            data = {
                ...data,
                result: 500
            }
            break
        case 'CM':
            data = {
                readLen: 2,
                result: 900
            }
            break
        case 'M':
            data = {
                ...data,
                result: 1000
            }
            break
        default: break
    }
    return data
}
// @lc code=end