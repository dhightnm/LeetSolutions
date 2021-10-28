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
var widthOfBinaryTree = function(root) {
    let minDepth = [0];
    let maxBreadth = 0;
    
    
    function helperFunction(node, depth, position){
        if (!node) { return };
        if (depth === minDepth.length) { minDepth[depth] = position }
        
        let diff = position - minDepth[depth];
        helperFunction(node.left, depth + 1, diff * 2)
        helperFunction(node.right, depth + 1, diff * 2 + 1)
        maxBreadth = Math.max(maxBreadth, diff + 1);
    };
    helperFunction(root, 0, 0);
    return maxBreadth; 
};