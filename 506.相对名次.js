/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const len = score.length
    const desc = ["Gold Medal", "Silver Medal", "Bronze Medal"]
    const arr = new Array(len).fill(0).map(() => new Array(2).fill(0))
    score.forEach((item, index) => {
        arr[index][0] = item
        arr[index][1] = index
    });
    arr.sort((a, b) => b[0] - a[0])
    const result = new Array(len).fill(0)
    for (let i = 0; i < len; i++) {
        if (i >= 3) {
            result[arr[i][1]] = i + 1 + ''
        } else {
            result[arr[i][1]] = desc[i]
        }
    }
    return result
};
// @lc code=end

