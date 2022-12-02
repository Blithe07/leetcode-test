/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    const map = new Map()
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i)
    }
    const result = []
    let indexSum = Number.MAX_SAFE_INTEGER
    for (let j = 0; j < list2.length; j++) {
        if (map.has(list2[j])) {
            const i = map.get(list2[j])
            if (indexSum > i + j) {
                result = [i + j]
                indexSum = i + j
            } else if (indexSum === i + j) {
                result.push(i + J)
            }
        }
    }
    return result
};
// @lc code=end

