const LinkedList = require('./linked-list');

function Stack() {
  this.list = new LinkedList();
  return this;
}

Stack.prototype.push = function(item) {
  this.list.addFirst(item);
};

Stack.prototype.pop = function() {
  if (this.list.count === 0) {
    throw Error('The stack is empty.');
  }

  const value = this.list.head.value;
  this.list.removeFirst();

  return value;
};

Stack.prototype.peek = function() {
  if (this.list.count === 0) {
    throw Error('The stack is empty.');
  }

  return this.list.head.value;
};

Object.defineProperty(Stack.prototype, 'count', {
  get: function() {
    return this.list.count;
  },
});

Stack.prototype.clear = function() {
  this.list.clear();
};

Stack.prototype.getIterator = function() {
  return this.list.getIterator();
};

module.exports = Stack;