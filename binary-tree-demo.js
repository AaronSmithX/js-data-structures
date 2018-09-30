const BinaryTree = require('./binary-tree');

const tree = new BinaryTree();

//       4
//    2     6
//  1  3   5  7
tree.add(4);
tree.add(2);
tree.add(6);
tree.add(1);
tree.add(3);
tree.add(5);
tree.add(7);

// console.log(JSON.stringify(tree, null, 2));

console.log(`Tree contains ${tree.count} nodes.`);

console.log('Searching for node with value 6...');
const six = tree.find(6);
console.log('Result: ' + six);

console.log('Searching for node with value 0...');
const zero = tree.find(0);
console.log('Result: ' + zero);

console.log('Searching for node with value 8...');
const eight = tree.find(8);
console.log('Result: ' + eight);

console.log('Checking if tree contains value 7...');
const containsSeven = tree.contains(7);
console.log('Result: ' + containsSeven);

console.log('Checking if tree contains value 17...');
const containsSeventeen = tree.contains(17);
console.log('Result: ' + containsSeventeen);