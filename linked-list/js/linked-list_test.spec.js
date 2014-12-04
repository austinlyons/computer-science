// test using 'jasmine-node linked-list_test.spec.js'
var LinkedList = require('./linked-list');

describe('Linked List', function() {

  it("empty", function() {
      var ll = new LinkedList();
      expect(ll.length()).toEqual(0);
      expect(ll.retrieve(0)).toEqual(undefined);
      expect(ll.remove(0)).toEqual(undefined);
  });

  it("add and retrieve", function() {
      var ll = new LinkedList();

      ll.add('first');
      expect(ll.length()).toEqual(1);
      expect(ll.retrieve(0)).toEqual('first');

      ll.add('second');
      expect(ll.length()).toEqual(2);
      expect(ll.retrieve(0)).toEqual('first');
      expect(ll.retrieve(1)).toEqual('second');

      ll.add('third');
      ll.toStr();
      expect(ll.length()).toEqual(3);
      expect(ll.retrieve(0)).toEqual('first');
      expect(ll.retrieve(1)).toEqual('second');
      expect(ll.retrieve(2)).toEqual('third');
  });

  it("remove and retrieve", function() {
      var ll = new LinkedList();
      ll.add('first');
      ll.add('second');
      ll.add('third');
      ll.add('fourth');
      expect(ll.length()).toEqual(4);
      ll.toStr();

      ll.remove(0)
      expect(ll.length()).toEqual(3);
      expect(ll.retrieve(0)).toEqual('second');
      expect(ll.retrieve(1)).toEqual('third');
      expect(ll.retrieve(2)).toEqual('fourth');

      ll.remove(1);
      expect(ll.length()).toEqual(2);
      expect(ll.retrieve(0)).toEqual('second');
      expect(ll.retrieve(1)).toEqual('fourth');

  });

  it("stack", function () {
    var stack = new LinkedList();
    stack.push('hi');
    expect(stack.length()).toEqual(1);
    expect(stack.retrieve(0)).toEqual('hi');

    stack.push('bye');
    stack.toStr();
    expect(stack.length()).toEqual(2);
    expect(stack.retrieve(0)).toEqual('bye');
    expect(stack.retrieve(1)).toEqual('hi');

    var res = stack.pop();
    expect(stack.length()).toEqual(1);
    expect(res).toEqual('bye');
    expect(stack.retrieve(0)).toEqual('hi');

    res = stack.pop();
    expect(stack.length()).toEqual(0);
    expect(res).toEqual('hi');

    res = stack.pop();
    expect(res).toEqual(null);

  });

  it("queue", function () {
    var queue = new LinkedList();
    queue.enqueue('first');
    expect(queue.length()).toEqual(1);
    expect(queue.retrieve(0)).toEqual('first');

    queue.enqueue('second');
    queue.toStr();
    expect(queue.length()).toEqual(2);
    expect(queue.retrieve(0)).toEqual('second');
    expect(queue.retrieve(1)).toEqual('first');

    var res = queue.dequeue();
    expect(queue.length()).toEqual(1);
    expect(res).toEqual('first');

    res = queue.dequeue();
    expect(queue.length()).toEqual(0);
    expect(res).toEqual('second');

    res = queue.dequeue();
    expect(res).toEqual(null);
  });

});
