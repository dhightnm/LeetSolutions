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
 var maxDepth = function(root) {
    if (root === null) { return 0 };
    
    if (root.left === null && root.right === null) { 
        return 1;
    } else {
        let left = maxDepth(root.left);
        let right =  maxDepth(root.right);
        return ( 1 + ((left > right) ? left : right))
    }
    
    
    
    
};