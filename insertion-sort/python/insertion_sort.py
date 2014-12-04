def insertion_sort(a):
    for j in range(1, len(a)):
        key = a[j]
        i = j - 1
        while i >= 0 and a[i] > key:
            a[i+1] = a[i]
            i -= 1
        a[i+1] = key
    return a

if __name__ == '__main__':
    assert insertion_sort([4,5,6,3,2,1]) == [1,2,3,4,5,6]
    assert insertion_sort([-3,0,3,-4]) == [-4,-3,0,3]
    assert insertion_sort(['z', 'p', 'a', 'd']) == ['a', 'd', 'p', 'z']
    assert insertion_sort(['b', 'a', 'A', 'B']) == ['A', 'B', 'a', 'b']


