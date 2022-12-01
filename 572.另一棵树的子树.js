/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    /**
     * 暴力查询，时间复杂度O(root*subRoot)，空间复杂度O(max(root深度,subRoot深度))
     * @param {1} s 
     * @param {*} t 
     * @returns 
     */
    // const dfs = (s, t) => {
    //     if (!s) return false
    //     return check(s, t) || dfs(s.left, t) || dfs(s.right, t)
    // }
    // const check = (s, t) => {
    //     if (!s && !t) return true
    //     if (!s || !t || s.val !== t.val) return false
    //     return check(s.left, t.left) && check(s.right, t.right)
    // }
    // return dfs(root, subRoot)

    /**
     * 先序遍历得到的数据进行KMP比较，时间复杂度O(root+subRoot)，空间复杂度O(root+subRoot)
     */
    const getMaxValue = (root) => {
        if (!root) return
        maxValue = Math.max(maxValue, root.val)
        getMaxValue(root.left)
        getMaxValue(root.right)
    }
    const getDfsOrder = (root, arr) => {
        if (!root) return
        arr.push(root.val)
        if (root.left) {
            getDfsOrder(root.left, arr)
        } else {
            arr.push(lNull)
        }
        if (root.right) {
            getDfsOrder(root.right, arr)
        } else {
            arr.push(rNull)
        }
    }
    const KMP = (arr1, arr2) => {
        const next = getNextArr(arr2)
        let i1 = 0, i2 = 0
        while (i1 < arr1.length && i2 < arr2.length) {
            if (arr1[i1] === arr2[i2]) {
                i1++;
                i2++
            } else if (next[i2] === -1) {
                i1++
            } else {
                i2 = next[i2]
            }
        }
        return i2 === arr2.length ? i1 - i2 : -1
    }
    const getNextArr = (arr2) => {
        if (arr2.length === 1) return [-1]
        const next = new Array(arr2.length)
        next[0] = -1
        next[1] = 0
        let i2 = 2, i1 = 0
        while (i2 < next.length) {
            if (arr2[i2 - 1] === arr2[i1]) {
                next[i2++] = ++i1
            } else if (i1 > 0) {
                i1 = next[i1]
            } else {
                next[i2++] = 0
            }
        }
        return next
    }
    let maxValue = Number.MIN_SAFE_INTEGER
    const rootArr = [], subRootArr = []
    getMaxValue(root)
    getMaxValue(subRoot)
    // 对于没有左右子树的节点，对其左右子树赋比所有节点最大值更大的值，
    // 用于后续KMP比较
    const lNull = maxValue + 1, rNull = maxValue + 2
    getDfsOrder(root, rootArr)
    getDfsOrder(subRoot, subRootArr)
    // 两个数组进行KMP查询
    return KMP(rootArr, subRootArr) !== -1
};
// @lc code=end

