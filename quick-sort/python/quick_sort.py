def _swap(A, i, j):
    t = A[i]
    A[i] = A[j]
    A[j] = t

def _partition(A, p, r):
    x = A[r]
    i = p - 1
    for j in range(p, r):
        if A[j] <= x:
            i += 1
            _swap(A, i, j)
    _swap(A, i+1, r)
    return i + 1

def quick_sort(A, p, r):
    if p < r:
        q = _partition(A, p, r)
        quick_sort(A, p, q-1)
        quick_sort(A, q+1, r)


if __name__ == '__main__':
    A = [[4, 3, 2, 1],
         [1, 2, 3, 4],
         [1, 4, 3, 2],
         [3, 2, 1, 4],
         [-1, -2, -3, -4],
         [-4, -3, -2, -1],
         [0, 1, -1, 2],
         [4, 4, 3, 2]]

    print 'before\t\tsorted'
    for x in range(len(A)):
        before = list(A[x])
        quick_sort(A[x], 0, len(A[x])-1)
        print '%s\t%s' % (before, A[x])

