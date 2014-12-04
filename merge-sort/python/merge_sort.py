def merge(left, right):
    out = []
    l = 0
    r = 0
    l_len = len(left)
    r_len = len(right)
    while l < l_len and r < r_len:
        if left[l] <= right[r]:
            out.append(left[l])
            l += 1
        else:
            out.append(right[r])
            r += 1
    if l < l_len:
        out = out + left[l:]
    else:
        out = out + right[r:]
    return out

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = int(len(arr)/2)
    left = arr[:mid]
    right = arr[mid:]
    left = merge_sort(left)
    right = merge_sort(right)
    return merge(left, right)

if __name__ == '__main__':
    assert merge_sort([4,5,6,3,2,1]) == [1,2,3,4,5,6]
    assert merge_sort([-3,0,3,-4]) == [-4,-3,0,3]
    assert merge_sort(['z', 'p', 'a', 'd']) == ['a', 'd', 'p', 'z']
    assert merge_sort(['b', 'a', 'A', 'B']) == ['A', 'B', 'a', 'b']
