/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    /**
     * 等于val的往后推，最差例子：[1,2,3,4,5] val=1
     */
    // const n = nums.length;
    // let left = 0;
    // for (let right = 0; right < n; right++) {
    //     if (nums[right] !== val) {
    //         nums[left] = nums[right];
    //         left++;
    //     }
    // }
    // return left;
    /**
     * 头尾指针，避免最坏例子
     */
    const n = nums.length
    let left = 0, right = n
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1]
            right--
        } else {
            left++
        }
    }
    return left
};
// @lc code=end