/* Use the LinkedList as a stack */
var LinkedList = require('./linked-list');
var stack = new LinkedList();
stack.push('world');
stack.push('hello');

console.log(stack.toStr()); // hello->world
console.log(stack); // { _head: { data: 'hello', next: { data: 'world', next: null } }, _length: 2 }

console.log(stack.pop()); // pop the top of the stack: 'hello'
console.log(stack.toStr()); // world
console.log(stack); // { _head: { data: 'world', next: null }, _length: 1 }

