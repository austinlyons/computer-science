function LinkedList() {
  this._head = null;
  this._length = 0;
}

LinkedList.prototype.length = function() {
  return this._length;
};

LinkedList.prototype.add = function (data) {
  var current,
      node = {
        data: data,
        next: null
      };

  if (this._head === null)
    this._head = node;
  else {
    current = this._head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this._length++;
};

LinkedList.prototype.retrieve = function (index) {
  if (this.invalidIndex(index))
    return null;

  var current = this._head,
      i = 0;

  while (i++ < index) {
    current = current.next;
  }
  return current.data;
};

LinkedList.prototype.remove = function (index) {
  if (this.invalidIndex(index))
    return null;

  var current = this._head,
      previous,
      i = 0;

  if (index === 0)
    this._head = current.next;
  else {
    while (i++ < index) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }
  this._length--;

  return current.data;
};

// stack-like push: add to head
LinkedList.prototype.push = function (data) {
  var node = { data: data, next: null },
      temp = this._head;
  this._head = node;
  this._head.next = temp;
  this._length++;

  return this._length;
};

// stack-like pop: remove from head
LinkedList.prototype.pop = function () {
  return this.remove(0);
}

// queue-like enqueue: add to head
LinkedList.prototype.enqueue = function (data) {
  this.push(data);
}

// queue-like dequeue: remove from tail
LinkedList.prototype.dequeue = function () {
  return this.remove(this._length - 1);
}

LinkedList.prototype.toStr = function () {
  var current = this._head,
      i = 0,
      str = "";

  while (i++ < this._length) {
    str += current['data'] + '->';
    current = current.next;
  }

  return str.slice(0, -2); // remove trailing arrow
}

LinkedList.prototype.invalidIndex = function(index) {
  return index < 0 || index >= this._length;
}

module.exports = LinkedList;
