/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    // create an array to contain the linked list
    const splitList = new Array(k).fill(null);
    let n = 0; //nodes in the list
    
    let currentNode = root;
    
    // count the number of nodes in the linked list
    while(currentNode !== null) {
        n++;
        currentNode = currentNode.next;
    }
    
    const arraySize = Math.floor(n / k);
    let remainder = n % k;
    
    let head = root;
    let tail = root;
    
    for (let i = 0; head !== null; i++) {
        let m = arraySize;
        if (remainder > 0) {
            m ++;
            remainder--;
        }
        let tail = head;
        
        for (let j = 1; j < m; j++) {
            tail = tail.next;
        }
        const next = tail.next;
        tail.next = null;
        splitList[i] = head;
        head = next;
    }
    
    return splitList
    
};