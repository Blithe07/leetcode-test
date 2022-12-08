/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    /**
     * 排序，时间复杂度O(NlogN)，空间复杂度O(logN)
     */
    // const errorNum = [0, 0], len = nums.length
    // nums.sort((a, b) => a - b)
    // // 用零记录上一个值解决丢失数字时0的问题
    // let prev = 0
    // for (let i = 0; i < len; i++) {
    //     const cur = nums[i]
    //     if (cur === prev) {
    //         // 记录到重复的值
    //         errorNum[0] = prev
    //     } else if (cur - prev > 1) {
    //         // 记录到丢失的值
    //         errorNum[1] = prev + 1
    //     }
    //     prev = cur
    // }
    // // 如果丢失的数字是n
    // if (nums[len - 1] !== len) {
    //     errorNum[1] = len
    // }
    // return errorNum
    /**
     * 哈希，时间复杂度O(N)，空间复杂度O(N)
     */
    // const errorNum = new Array(2).fill(0);
    // const n = nums.length;
    // const map = new Map();
    // for (const num of nums) {
    //     map.set(num, (map.get(num) || 0) + 1);
    // }
    // for (let i = 1; i <= n; i++) {
    //     const count = map.get(i) || 0;
    //     if (count === 2) {
    //         errorNum[0] = i;
    //     } else if (count === 0) {
    //         errorNum[1] = i;
    //     }
    // }
    // return errorNum;
    /**
     * 位运算，时间复杂度O(N)，空间复杂度O(1)
     */
    // eg:[1,2,2,4,5,6]
    const len = nums.length
    // 记录重复值和丢失值异或结果
    let xor = 0
    for (const num of nums) {
        xor ^= num
    }
    // 找到重复值和丢失值异或结果 xor:1  => 2^3
    for (let i = 1; i <= len; i++) {
        xor ^= i
    }
    // 第一个重复值和丢失值不一致的二进制位  2 3 => 1
    const lowBit = xor & (-xor)
    let num1 = 0, num2 = 0
    // 两次遍历一定能找出重复值和丢失值
    // 因为nums中只出现一次的数，会由于两次遍历异或为0
    // lowBit & num 能将重复值和丢失值分散到num1和num2中
    for (const num of nums) {
        if ((lowBit & num) === 0) {
            num1 ^= num
        } else {
            num2 ^= num
        }
    }
    for (let i = 1; i <= len; i++) {
        if ((i & lowBit) === 0) {
            num1 ^= i;
        } else {
            num2 ^= i;
        }
    }
    // 不确定num1和num2大小，所以需要再次遍历nums数组
    for (const num of nums) {
        if (num === num1) {
            return [num1, num2]
        }
    }
    return [num2, num1]
};
// @lc code=end

