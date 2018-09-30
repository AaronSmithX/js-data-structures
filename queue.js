const LinkedList = require('./linked-list');

function Queue() {
  this.list = new LinkedList();
  return this;
}

Queue.prototype.enqueue = function(item) {
  this.list.addLast(item);
};

Queue.prototype.dequeue = function() {
  if (this.list.count === 0) {
    throw Error('The queue is empty.');
  }

  const value = this.list.head.value;
  this.list.removeFirst();

  return value;
};

Object.defineProperty(Queue.prototype, 'count', {
  get: function() {
    return this.list.count;
  },
});

Queue.prototype.clear = function() {
  this.list.clear();
};

Queue.prototype.getIterator = function() {
  return this.list.getIterator();
};

module.exports = Queue;