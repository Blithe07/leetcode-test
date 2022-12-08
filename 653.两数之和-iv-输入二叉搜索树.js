/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入二叉搜索树
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    /**
     * 深度优先+哈希
     */
    const set = new Set()
    const dfs = (root, k) => {
        if (!root) return false;
        if (set.has(k - root.val)) {
            return true;
        }
        set.add(root.val);
        return dfs(root.left, k) || dfs(root.right, k)
    }
    return dfs(root, k)
};
// @lc code=end

