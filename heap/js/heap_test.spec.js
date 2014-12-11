// test using 'jasmine-node heap_test.spec.js'
var Heap = require('./heap');

describe('Heap', function () {
  var arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
  var h = new Heap(arr);

  it("heapify", function() {
    expect(h.getHeap()).toEqual([16, 14, 10, 8, 7, 9, 3, 2, 4, 1]);
  });

  it("removeMax", function() {
    var m = h.removeMax();
    expect(m).toEqual(16);
    expect(h.getHeap()).toEqual([14, 8, 10, 4, 7, 9, 3, 2, 1]);
  });

  it("heapSort", function() {
    var sorted_arr = h.heapSort();
    expect(sorted_arr).toEqual([1, 2, 3, 4, 7, 8, 9, 10, 14]);
  });

  it("insert", function() {
    expect(h.getHeap()).toEqual([14, 8, 10, 4, 7, 9, 3, 2, 1]);
    h.insert(11);
    expect(h.getHeap()).toEqual([14, 11, 10, 4, 8, 9, 3, 2, 1, 7]);
  });
});
