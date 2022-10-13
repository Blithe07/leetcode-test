/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    /** 
     * 递归，时间和空间复杂度都是O(n+m)
     if (list1 === null) {
         return list2
     } else if (list2 === null) {
         return list1
     } else if (list1.val < list2.val) {
         list1.next = mergeTwoLists(list1.next, list2)
         return list1
     } else {
         list2.next = mergeTwoLists(list1, list2.next)
         return list2
     }
     */
    /**
     * 迭代，时间复杂度O(n+m)，空间复杂度O(1)
     */
    const prevHead = new ListNode(-1)
    let prev = prevHead
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            prev.next = list1
            list1 = list1.next
        } else {
            prev.next = list2
            list2 = list2.next
        }
        prev = prev.next
    }
    prev.next = list1 === null ? list2 : list1
    return prevHead.next
};
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// @lc code=end

