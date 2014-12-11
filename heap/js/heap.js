function Heap(arr) {
  this._heap = arr;
  this.buildHeap(arr);
}

Heap.prototype.left = function(i) {
  return 2*i + 1;
}

Heap.prototype.right = function(i) {
  return 2*i + 2;
}

Heap.prototype.ancestor = function(i) {
  return Math.floor((i-1)/2);
}

Heap.prototype.swap = function(A, i, j) {
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

Heap.prototype.heapify = function(heap, i, heapSize){
  var l = this.left(i),
      r = this.right(i),
      largest = i;

  if (!heapSize) {
    heapSize = heap.length;
  }

  if (l < heapSize && heap[l] > heap[i]) {
    largest = l;
  }
  if (r < heapSize && heap[r] > heap[largest]) {
    largest = r;
  }
  if (largest != i) {
    this.swap(heap, i, largest);
    this.heapify(heap, largest, heapSize);
  }
}

Heap.prototype.increaseKey = function(i, key) {
  if (key < this._heap[i]) {
    throw 'new key is smaller than current key';
  }

  this._heap[i] = key;

  while (i > 0 && this._heap[this.ancestor(i)] < this._heap[i]) {
    this.swap(this._heap, i, this.ancestor(i));
    i = this.ancestor(i);
  }
}

Heap.prototype.buildHeap = function(arr) {
  for (var i = Math.floor(arr.length/2); i > -1; i--) {
    this.heapify(arr, i);
  }
}

Heap.prototype.heapSort = function() {
  // Leave this._heap as it is (a heap).
  // Instead copy this._heap, sort it, and return
  // the sorted array
  var heap = this._heap.slice();
  heapSize = heap.length;
  for (var i = heapSize - 1; i > 0; i--) {
    this.swap(heap, 0, i);
    heapSize--;
    this.heapify(heap, 0, heapSize);
  }
  return heap;
}

Heap.prototype.getHeap = function() {
  return this._heap;
}

Heap.prototype.getMax = function() {
  return this._heap[0];
}

Heap.prototype.removeMax = function() {
  var length = this._heap.length;
  if (length < 1) {
    return
  }
  var maximum = this._heap[0];
  this._heap[0] = this._heap[length-1];
  this._heap.pop();
  this.heapify(this._heap, 0);
  return maximum;
}

Heap.prototype.insert = function(key){
  this._heap.push(-Infinity);
  this.increaseKey(this._heap.length-1, key);
}

module.exports = Heap;
