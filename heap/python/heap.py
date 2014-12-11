from math import floor

class Heap:
    def _left(self, i):
        return 2*i + 1

    def _right(self, i):
        return 2*i + 2

    def _parent(self, i):
        return int(floor((i-1)/2))

    def _swap(self, A, i, j):
        temp = A[i]
        A[i] = A[j]
        A[j] = temp

    def _valid(self, i):
        if i >= len(self._heap):
            raise Exception("index i is >= heap length")
        key = self._heap[i]
        l = self._left(i)
        # if left exists but is bigger than it's parent: invalid
        if l < len(self._heap) and self._heap[l] > key:
            return False
        r = self._right(i)
        if r < len(self._heap) and self._heap[r] > key:
            return False

        # node has no children, has a valid left child,
        # or has valid left and right children
        return True

    def _heapify(self, heap, i, heap_size=None):
        if not heap_size:
            heap_size = len(heap)
        l = self._left(i)
        r = self._right(i)
        largest = i
        if l < heap_size and heap[l] > heap[i]:
            largest = l
        if r < heap_size and heap[r] > heap[largest]:
            largest = r
        if largest is not i:
            self._swap(heap, i, largest)
            self._heapify(heap, largest, heap_size)

    def _increase_key(self, i, key):
        if key < self._heap[i]:
            raise Exception('new key is smaller than current key')
        self._heap[i] = key
        while i > 0 and self._heap[self._parent(i)] < self._heap[i]:
            self._swap(self._heap, i, self._parent(i))
            i = self._parent(i)

    def _build_heap(self, arr):
        for i in range(len(arr)/2, -1, -1):
            self._heapify(arr, i)

    def __init__(self, arr=[]):
        # use list() to copy input so we don't mutate it
        self._heap = list(arr)
        self._build_heap(self._heap)

    def heap_sort(self):
        """
        We'll leave self._heap as it is (a heap).
        So we create a copy of self._heap, sort it,
        and return the sorted array
        """
        heap = list(self._heap)
        heap_size = len(heap)
        self._build_heap(heap)
        for i in range(heap_size - 1, 0, -1):
            self._swap(heap, 0, i)
            heap_size -= 1
            self._heapify(heap, 0, heap_size)
        return heap

    def get_heap(self):
        return self._heap

    def get_max(self):
        return self._heap[0]

    def remove_max(self):
        length = len(self._heap)
        if length < 1:
            return None
        maximum = self._heap[0]
        self._heap[0] = self._heap[length-1]
        del self._heap[length-1]
        self._heapify(self._heap, 0)
        return maximum

    def insert(self, key):
        self._heap.append(float("-inf"))
        self._increase_key(len(self._heap)-1, key)

    def is_heap(self):
        """
        Check that heap property is still satisfied.
        """
        length = len(self._heap)
        if length == 0 or length == 1:
            return True

        # the tree-like nature of the heap makes me
        # think of using recursion to traverse it,
        # but since it's an array I'll just sequentially
        # check each element
        for i in range(length):
            if not self._valid(i):
                return False

        return True


if __name__ == '__main__':
    arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]
    print 'before building heap\t%s' % arr
    h = Heap(arr)
    print 'after building heap\t%s' % h.get_heap()
    assert h.is_heap() == True
    assert h.get_heap() == [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]

    print 'heap before removing max\t%s' % h.get_heap()
    m = h.remove_max()
    print 'after removing max\t%s' % h.get_heap()
    print 'max was %s' % m
    assert m == 16
    assert h.is_heap() == True
    assert h.get_heap() == [14, 8, 10, 4, 7, 9, 3, 2, 1]

    print 'heap before sort\t%s' % h.get_heap()
    sorted_arr = h.heap_sort()
    print 'array after heap sort\t%s' % sorted_arr
    assert sorted_arr == [1, 2, 3, 4, 7, 8, 9, 10, 14]
    assert h.is_heap() == True

    print 'heap before inserting 11\t%s' % h.get_heap()
    assert h.get_heap() == [14, 8, 10, 4, 7, 9, 3, 2, 1]
    h.insert(11)
    print 'heap after inserting 11\t%s' % h.get_heap()
    assert h.is_heap() == True
    assert h.get_heap() == [14, 11, 10, 4, 8, 9, 3, 2, 1, 7]

