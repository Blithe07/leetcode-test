/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    /**
     *  迭代，时间O(N),空间O(1) 
     */
    // if (!head) return head
    // let cur = head, prev = null
    // while (cur) {
    //     const next = cur.next
    //     cur.next = prev
    //     prev = cur
    //     cur = next
    // }
    // return prev
    /** 
     * 递归，时间O(N),空间O(N) 
     */
    if (!head || !head.next) return head
    const newHead = reverseList(head.next)
    head.next.next = head
    head.next =null
    return newHead
};
// @lc code=end

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}