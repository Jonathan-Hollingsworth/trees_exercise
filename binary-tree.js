/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let toVisitQueue = [this.root];
    let depth = 0

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current === null || (current.left === null && current.right === null)) 
        return depth;

      if(current.left !== null)toVisitQueue.push(current.left)
      if(current.right !== null)toVisitQueue.push(current.right)
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let toVisitQueue = [this.root];
    let depth = 0

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current === null || (current.left === null && current.right === null)) 
        return depth;

      if(current.left !== null)toVisitQueue.push(current.left)
      if(current.right !== null)toVisitQueue.push(current.right)
    }
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let toVisitQueue = [this.root];
    let sum = 0

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current === null || (current.left === null && current.right === null)) {
        return sum;
      }
      
      sum += current.val

      if (current.right !== null && current.right !== null) {
        if(current.left.val > current.right.val)toVisitQueue.push(current.left)
        if(current.right.val < current.right.val)toVisitQueue.push(current.right)
      }
      if(current.left !== null)toVisitQueue.push(current.left)
      if(current.right !== null)toVisitQueue.push(current.right)
    }
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let toVisitQueue = [this.root];
    let nextLarger = null

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current === null) return null

      if (current.val > lowerBound) 
        if (nextLarger === null || current.val < nextLarger)
          nextLarger = current.val;

      if(current.left !== null)toVisitQueue.push(current.left)
      if(current.right !== null)toVisitQueue.push(current.right)
    }

    return nextLarger
  }

//   /** Further study!
//    * areCousins(node1, node2): determine whether two nodes are cousins
//    * (i.e. are at the same level but have different parents. ) */

//   areCousins(node1, node2) {

//   }

//   /** Further study!
//    * serialize(tree): serialize the BinaryTree object tree into a string. */

//   static serialize() {

//   }

//   /** Further study!
//    * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

//   static deserialize() {

//   }

//   /** Further study!
//    * lowestCommonAncestor(node1, node2): find the lowest common ancestor
//    * of two nodes in a binary tree. */

//   lowestCommonAncestor(node1, node2) {
    
//   }
}

module.exports = { BinaryTree, BinaryTreeNode };
