/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    /**
     * 递归
     */
    // let ans = Number.MAX_SAFE_INTEGER, pre = -1;
    // const dfs = (root) => {
    //     if (!root) return
    //     dfs(root.left)
    //     if (pre === -1) {
    //         pre = root.val
    //     } else {
    //         ans = Math.min(ans, root.val - pre)
    //         pre = root.val
    //     }
    //     dfs(root.right)
    // }
    // dfs(root)
    // return ans
    /**
     * morris
     */
    let cur = root, prev, ans = Number.MAX_SAFE_INTEGER, pre = -1
    const compareMin = (val) => {
        if (pre === -1) {
            pre = val
        } else {
            ans = Math.min(ans, val - pre)
            pre = val
        }
    }
    while (cur) {
        if (!cur.left) {
            compareMin(cur.val)
            cur = cur.right
            continue
        }
        prev = cur.left
        while (prev.right && prev.right !== cur) {
            prev = prev.right
        }
        if (!prev.right) {
            prev.right = cur
            cur = cur.left
        } else {
            prev.right = null
            compareMin(cur.val)
            cur = cur.right
        }
    }
    return ans
};
// @lc code=end

