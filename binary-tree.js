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
    let nextDepth = [this.root];
    let depth = 0

    while (nextDepth.length) {
      if (nextDepth[0] === null) return depth
      let currentDepth = [...nextDepth]
      nextDepth = []
      depth += 1

      while (currentDepth.length) {
        let current = currentDepth.shift();

        if (current.left === null && current.right === null) 
          return depth;

        if(current.left !== null)nextDepth.push(current.left)
        if(current.right !== null)nextDepth.push(current.right)
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let nextDepth = [this.root];
    let depth = 0

    while (nextDepth.length) {
      if (nextDepth[0] === null) return depth
      let currentDepth = [...nextDepth]
      nextDepth = []
      depth += 1

      while (currentDepth.length) {
        let current = currentDepth.shift();

        if(current.left !== null)nextDepth.push(current.left)
        if(current.right !== null)nextDepth.push(current.right)
      }
    }

    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let root = this.root
    function checkSum(node) {
      if (!node) return 0

      if (node === root) {
        if (node.left && node.right) {
          if (checkSum(node.left) > checkSum(node.right)) {
            if (checkSum(node.right) > 0) {
              return node.val + checkSum(node.left) + checkSum(node.right)
            }
            return node.val + checkSum(node.left)
          } else {
            if (checkSum(node.left) > 0) {
              return node.val + checkSum(node.right) + checkSum(node.left)
            }
            return node.val + checkSum(node.right)
          }
        }
      } else {
        if (node.left && node.right) {
          if (checkSum(node.left) > checkSum(node.right)) {
            return node.val + checkSum(node.left)
          } else {
            return node.val + checkSum(node.right)
          }
        } else if (node.left) {
          if (checkSum(node.left) > 0) {
            return node.val + checkSum(node.left)
          } else { return node.val }
        } else if (node.right) {
          if (checkSum(node.right) > 0) {
            return node.val + checkSum(node.right)
          } else { return node.val }
        } else { return node.val }
      }
    }

    return checkSum(root)
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let toVisitQueue = [this.root];
    let nextLarger = null

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current === null) return null

      if (current.val > lowerBound) {
        if (nextLarger === null || current.val < nextLarger) {
          nextLarger = current.val;
        }
      }

      if (nextLarger === lowerBound + 1) return nextLarger

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
