/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    /**
     * 递归
     */
    // if (!root) return []
    // const result = []
    // result.push(root.val)
    // for (let i = 0; i < root.children.length; i++) {
    //     result = [...result, preorder(root.children[i])]
    // }
    // return result
    /**
     * 迭代
     */
    if (!root) return []
    const ans = [], stack = [], nextIndexMap = new Map()
    let node = root
    while (node || stack.length) {
        while (node) {
            ans.push(node.val)
            stack.push(node)
            if (!node.children) {
                break
            }
            /** 标记当前访问的是第一个节点 */
            nextIndexMap.set(node, 1)
            node = node.children[0]
        }
        node = stack[stack.length - 1]
        const i = nextIndexMap.get(node)
        if (i < node.children.length) {
            nextIndexMap.set(node, i + 1)
            node = node.children[i]
        } else {
            stack.pop()
            nextIndexMap.delete(node)
            node = null
        }
    }
    return ans
};
// @lc code=end

