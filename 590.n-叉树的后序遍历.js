/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    /**
     * 递归
     */
    // if (!root) return []
    // const result = []
    // const helper = (root, result) => {
    //     if (!root) return
    //     for (let i = 0; i < root.children.length; i++) {
    //         helper(root.children[i], result)
    //     }
    //     result.push(root.val)
    //     return result
    // }
    // return helper(root, result)
    /**
     * 迭代
     */
    if (!root) return []
    const ans = [], stack = [], nextIndexMap = new Map()
    let node = root
    while (node || stack.length) {
        while (node) {
            stack.push(node)
            if (!node.children) {
                break
            }
            nextIndexMap.set(node, 1)
            node = node.children[0]
        }
        node = stack[stack.length - 1]
        const i = nextIndexMap.get(node)
        if (i < node.children.length) {
            nextIndexMap.set(node, i + 1)
            node = node.children[i]
        } else {
            ans.push(node.val)
            stack.pop()
            nextIndexMap.delete(node)
            node = null
        }
    }
    return ans
};
// @lc code=end

