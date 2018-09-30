function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
  return this;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.count = 0;
  return this;
}

DoublyLinkedList.prototype.addFirst = function(value) {
  const node = new Node(value);

  const oldHead = this.head;
  this.head = node;
  this.head.next = oldHead;

  this.count++;
  
  if (this.count === 1) {
    this.tail = this.head;
  }
  else {
    oldHead.prev = this.head;
  }
};

DoublyLinkedList.prototype.addLast = function(value) {
  const node = new Node(value);

  if (this.count === 0) {
    this.head = node;
  }
  else {
    this.tail.next = node;
    node.prev = this.tail;
  }
  this.tail = node;
  this.count++;
};

DoublyLinkedList.prototype.removeFirst = function() {
  if (this.count !== 0) {
    this.head = this.head.next;
    this.count--;

    if (this.count === 0) {
      this.tail = null;
    }
    else {
      this.head.prev = null;
    }
  }
};

DoublyLinkedList.prototype.removeLast = function() {
  if (this.count !== 0) {
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    this.count--;
  }
};

DoublyLinkedList.prototype.getIterator = function*() {
  let current = this.head;
  while (current !== null) {
    yield current.value;
    current = current.next;
  }
};

DoublyLinkedList.prototype.getReverseIterator = function*() {
  let current = this.tail;
  while (current !== null) {
    yield current.value;
    current = current.prev;
  }
};

module.exports = DoublyLinkedList;
