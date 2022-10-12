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
    /**
     * 通过从后往前读
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
     */
    /**
     * 从前往后读，遇到下一位比当前位大的做减法，否则做加法
     */
    let result = 0
    let preNum = getValue(s[0])
    for (let i = 1; i < s.length; i++) {
        const curNum = getValue(s[i])
        if (curNum > preNum) {
            result -= preNum
        } else {
            result += preNum
        }
        preNum = curNum
    }
    // 右值永远为正，因此最后一位必然为正
    result += preNum
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
/**
 * 返回罗马字符对应整数
 * @param {string} ch 
 * @returns 
 */
const getValue = (ch) => {
    switch (ch) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}
// @lc code=end