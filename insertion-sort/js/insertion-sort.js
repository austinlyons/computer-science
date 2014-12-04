function insertionSort(a){
  var len = a.length,
      j;

  for (j = 1; j < len; j++) {
    key = a[j];
    i = j - 1;
    while ( i >= 0 && a[i] > key) {
      a[i+1] = a[i];
      i--;
    }
    a[i+1] = key;
  }
  return a;
}

// sanity check
a = [4, 5, 6, 3, 2, 1];
console.log(a + ' --> ' + insertionSort(a));
a = [-3, 0, 3, -4];
console.log(a + ' --> ' + insertionSort(a));
a = ['b', 'a', 'A', 'B'];
console.log(a + ' --> ' + insertionSort(a));
