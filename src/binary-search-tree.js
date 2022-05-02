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
    this.root = null;
  }
  root() {
    return this.root.data;
  }

  add(data) {
    this.root = addWithin(this.root, data);

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
    return searchWithin(this.root, data);

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
    return searchWithin(this.root, data);

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
    this.root = removeNode(this.root, data);

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
      node.value = minFromRight.value;

      node.right = removeNode(node.right, minFromRight.value);
      return node;
    }
  }

  min() {
    if (!this.root) {
      return;
    }
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
tree.find(8);
tree.find(2);
tree.find(32);
tree.find(14);
tree.root();
tree.min();
tree.max();
tree.remove(5);
tree.has(5);
module.exports = {
  BinarySearchTree,
};
