const DoublyLinkedList = require('./doubly-linked-list');

const list = new DoublyLinkedList();
list.addLast(7);
list.addFirst(5);
list.addLast(9);
list.addFirst(3);

console.log('\nIterating doubly linked list...');
for (let value of list.getIterator()) {
  console.log(value);
}

console.log('\nIterating doubly linked list in reverse...');
for (let value of list.getReverseIterator()) {
  console.log(value);
}

list.removeFirst();
list.removeLast();

console.log('\nIterating doubly linked list after removals...');
for (let value of list.getIterator()) {
  console.log(value);
}

console.log('\nIterating doubly linked list in reverse after removals...');
for (let value of list.getReverseIterator()) {
  console.log(value);
}
