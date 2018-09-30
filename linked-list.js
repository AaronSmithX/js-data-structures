function Node(value) {
  this.value = value;
  this.next = null;
  return this;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.count = 0;
  return this;
}

LinkedList.prototype.addFirst = function(value) {
  const node = new Node(value);

  const oldHead = this.head;
  this.head = node;
  this.head.next = oldHead;

  this.count++;
  
  if (this.count === 1) this.tail = this.head;
};

LinkedList.prototype.addLast = function(value) {
  const node = new Node(value);

  if (this.count === 0) {
    this.head = node;
  }
  else {
    this.tail.next = node;
  }
  this.tail = node;
  this.count++;
};

LinkedList.prototype.removeFirst = function() {
  if (this.count !== 0) {
    this.head = this.head.next;
    this.count--;

    if (this.count === 0) {
      this.tail = null;
    }
  }
};

LinkedList.prototype.removeLast = function() {
  if (this.count !== 0) {
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.count--;
  }
};

LinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.getIterator = function*() {
  let current = this.head;
  while (current !== null) {
    yield current.value;
    current = current.next;
  }
};

module.exports = LinkedList;
