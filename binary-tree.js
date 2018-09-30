function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  return this;
}

Node.prototype.compareTo = function(otherNode) {
  if (this.value < otherNode.value) return -1;
  if (this.value > otherNode.value) return 1;
  return 0;
};

function BinaryTree() {
  this.head = null;
  this.count = 0;
  return this;
}

BinaryTree.prototype.add = function(value) {
  if (this.head === null) {
    this.head = new Node(value);
    return;
  }
  else {
    this.addTo(this.head, value);
  }
  this.count++;
};

BinaryTree.prototype.addTo = function(node, value) {
  if (value < node.value) {
    if (node.left === null) {
      node.left = new Node(value);
    }
    else {
      this.addTo(node.left, value);
    }
  }
  else {
    if (node.right === null) {
      node.right = new Node(value);
    }
    else {
      this.addTo(node.right, value);
    }
  }
};

BinaryTree.prototype.findWithParent = function(currentNode, value) {
  if (currentNode === null) {
    return null;
  }
  if (currentNode.value === value) {
    return currentNode;
  }
  if (value < currentNode.value) {
    return this.findWithParent(currentNode.left, value);
  }
  return this.findWithParent(currentNode.right, value);
};

BinaryTree.prototype.find = function(value) {
  return this.findWithParent(this.head, value);
};

BinaryTree.prototype.contains = function(value) {
  return this.find(value) !== null;
};

BinaryTree.prototype.remove = function() {
  //
};

module.exports = BinaryTree;