const Queue = require('./queue');

const queue = new Queue();

console.log('Enqueuing odd numbers 11-19...');
queue.enqueue(11);
queue.enqueue(13);
queue.enqueue(15);
queue.enqueue(17);
queue.enqueue(19);

console.log('Iterating queue...');
for (let item of queue.getIterator()) {
  console.log(item);
}

console.log('Dequeueing item...');
const value = queue.dequeue();
console.log('Value was: ' + value);

console.log('Iterating queue after dequeue...');
for (let item of queue.getIterator()) {
  console.log(item);
}

console.log('Clearing queue...');
queue.clear();
console.log('Count is now: ' + queue.count);
