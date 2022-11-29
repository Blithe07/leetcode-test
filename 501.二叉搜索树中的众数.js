/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
    let base = 0, count = 0, maxCount = 0, answer = []
    const update = (val) => {
        if (val === base) {
            count++
        } else {
            base = val
            count = 1
        }
        if (count === maxCount) {
            answer.push(base)
        }
        if (count > maxCount) {
            answer = [base]
            maxCount = count
        }
    }
    /**
     * 递归，时间复杂度O(N)，空间复杂度O(N)
     * @param {*} root 
     * @returns 
     */
    // const dfs = (root) => {
    //     if (!root) return
    //     dfs(root.left)
    //     update(root.val)
    //     dfs(root.right)
    // }
    // dfs(root)
    // return answer
    /**
     * morris，时间复杂度O(N)，空间复杂度O(1)
     */
    let cur = root, prev = null
    while (cur) {
        if (!cur.left) {
            update(cur.val)
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
            update(cur.val)
            cur = cur.right
        }
    }
    return answer
};
// @lc code=end

