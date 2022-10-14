/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    /**
     * 逻辑思维
     // let left = 0, right = nums.length - 1
     // let mid = 0
     // let result = false
     // while ((left !== right - 1) && (left !== right)) {
     //     mid = Math.floor((right - left) / 2) + (left === mid ? mid : 0)
     //     if (nums[mid] === target) {
     //         result = true
     //         break
     //     } else if (nums[mid] < target) {
     //         // 目标值比中位数更大
     //         left = mid
     //     } else {
     //         // 目标值比中位数更小
     //         right = mid
     //     }
     // }
     // if (result) {
     //     // 在数组中找到了目标值
     //     return mid
     // } else {
     //     if (mid === 0) {
     //         mid = Math.ceil((right - left) / 2) + mid
     //     }
     //     // 未找到
     //     if (right <= mid) {
     //         // 左侧
     //         return nums[right] < target ? right + 1 : nums[left] < target ? left + 1 : left
     //     } else if (left >= mid) {
     //         // 右侧
     //         return nums[right] < target ? nums.length : nums[left] < target ? left + 1 : right - 1
     //     }
     // }
     */
    /**
     * 通过位运算
     */
    const n = nums.length;
    let left = 0, right = n - 1, ans = n;
    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};
// @lc code=end
