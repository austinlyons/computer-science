function _swap(A, i, j) {
  t = A[i];
  A[i] = A[j];
  A[j] = t;
}

function _partition(A, p, r) {
  var x = A[r],
      i = p - 1;

  for (j = p; j < r; j++) {
    if (A[j] <= x) {
      _swap(A, ++i, j);
    }
  }

  _swap(A, i+1, r);
  return i+1
}

function quickSort(A, p, r) {
  if (p < r) {
    q = _partition(A, p, r);
    quickSort(A, p, q-1);
    quickSort(A, q+1, r);
  }
}

var i,
    A = [[4, 3, 2, 1],
         [1, 2, 3, 4],
         [1, 4, 3, 2],
         [3, 2, 1, 4],
         [-1, -2, -3, -4],
         [-4, -3, -2, -1],
         [0, 1, -1, 2],
         [4, 4, 3, 2]],
    length = A.length;

console.log('before\t\tsorted');
for (i = 0; i < length; i++) {
  before = A[i].slice();
  quickSort(A[i], 0, A[i].length-1);
  console.log(before + '\t\t' +  A[i]);
}


