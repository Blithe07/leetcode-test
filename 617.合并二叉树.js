/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    /** 
     * 深度优先
     */
    // if (!root1) return root2
    // if (!root2) return root1
    // const mergeTree = new TreeNode(root1.val + root2.val)
    // mergeTree.left = mergeTrees(root1.left, root2.left)
    // mergeTree.right = mergeTrees(root1.right, root2.right)
    // return mergeTree
    /**
     * 广度优先
     */
    if (!root1) return root2
    if (!root2) return root1
    const mergeTree = new TreeNode(root1.val + root2.val)
    const queue = [], queue1 = [], queue2 = []
    queue.push(mergeTree)
    queue1.push(root1)
    queue2.push(root2)
    while (queue1.length && queue2.length) {
        const node = queue.shift(), node1 = queue1.shift(), node2 = queue2.shift();
        const left1 = node1.left, left2 = node2.left, right1 = node1.right, right2 = node2.right;
        if (left1 || left2) {
            if (left1 && left2) {
                const left = new TreeNode(left1.val + left2.val)
                node.left = left
                queue.push(left)
                queue1.push(left1)
                queue2.push(left2)
            } else if (!left1) {
                node.left = left2
            } else if (!left2) {
                node.left = left1
            }
        }
        if (right1 || right2) {
            if (right1 && right2) {
                const right = new TreeNode(right1.val + right2.val)
                node.right = right
                queue.push(right)
                queue1.push(right1)
                queue2.push(right2)
            } else if (!right1) {
                node.right = right2
            } else if (!right2) {
                node.right = right1
            }
        }
    }
    return mergeTree
};
// @lc code=end

