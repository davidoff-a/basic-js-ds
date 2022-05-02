const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class treeNode {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }
  root() {
    return this.treeRoot ? this.treeRoot : null;
  }

  add(data) {
    this.treeRoot = addWithin(this.treeRoot, data);

    function addWithin(node, data) {
      if (!node) {
        return new treeNode(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.treeRoot, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data
        ? searchWithin(node.left, data)
        : searchWithin(node.right, data);
    }
  }

  find(data) {
    return searchWithin(this.treeRoot, data);

    function searchWithin(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data
        ? searchWithin(node.left, data)
        : searchWithin(node.right, data);
    }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;

      node.right = removeNode(node.right, minFromRight.data);
      return node;
    }
  }

  min() {
    if (!this.treeRoot) {
      return;
    }
    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.treeRoot) {
      return;
    }
    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// tree.remove(14);
// tree.remove(8);
// tree.remove(9);
// console.log(tree.root());
// console.log(tree.treeRoot);
// console.log("#### has (14)", tree.has(14));
// console.log("#### has (8)", tree.has(8));
// console.log("#### has (9)", tree.has(9));
// console.log("#### has (2)", tree.has(2));
// console.log("#### has (6)", tree.has(6));
// console.log("#### has (128)", tree.has(128));
// console.log("#### has (31)", tree.has(31));
// console.log("#### has (54)", tree.has(54));
// console.log("#### has (1)", tree.has(1));
module.exports = {
  BinarySearchTree,
};
