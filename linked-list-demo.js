const LinkedList = require('./linked-list');

const list = new LinkedList();
list.addLast(7);
list.addFirst(5);
list.addLast(9);
list.addFirst(3);

console.log('\nIterating linked list...');
for (let value of list.getIterator()) {
  console.log(value);
}

list.removeFirst();
list.removeLast();

console.log('\nIterating linked list after removals...');
for (let value of list.getIterator()) {
  console.log(value);
}
