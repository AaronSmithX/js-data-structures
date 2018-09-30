const Stack = require('./stack');

const stack = new Stack();

console.log('Pushing 1-4 to the stack in order...');
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log('Popping off the stack...');
const item = stack.pop();
console.log('Value was: ' + item);
console.log('Stack size now: ' + stack.count);

console.log('\nIterating stack...');
for (let value of stack.getIterator()) {
  console.log(value);
}