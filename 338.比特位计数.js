/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    /**
     * 遍历二进制上有多少个1
     */
    // const result = [0]
    // for (let i = 1; i <= n; i++) {
    //     const data = Number(i).toString('2')
    //     let count = 0
    //     for (let j = 0; j < data.length; j++) {
    //         if (data[j] === '1') count++
    //     }
    //     result.push(count)
    // }
    // return result
    /**
     * 遍历二进制上有多少个1(位运算加快计算)
     */
    // const countOnes = (num) => {
    //     let res = 0
    //     while (num) {
    //         num &= num - 1
    //         res++
    //     }
    //     return res
    // }
    // const bits = new Array(n + 1).fill(0);
    // for (let i = 0; i <= n; i++) {
    //     bits[i] = countOnes(i);
    // }
    // return bits
    /** 
     * 动态规划(2的幂次方只有一个1，后续通过规律推出)
     */
    const bits = new Array(n + 1).fill(0);
    let highBit = 0;
    for (let i = 1; i <= n; i++) {
        if ((i & (i - 1)) == 0) {
            highBit = i;
        }
        // 当前索引-高效位(即2的整次幂索引)
        // 0->1->10->11->100->101->110->111->1000
        // 0->1->1->2->1->2->2->3->1
        bits[i] = bits[i - highBit] + 1;
    }
    return bits
};
// @lc code=end
