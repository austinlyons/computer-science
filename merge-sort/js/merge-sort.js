function merge(left, right){
  var out = [],
      l = 0,
      r = 0,
      l_len=left.length, 
      r_len=right.length;
  
  while (l < l_len && r < r_len) {
    if (left[l] <= right[r])
      out.push(left[l++]);
    else
      out.push(right[r++]);
  }

  if (l < l_len)
      out = out.concat(left.slice(l));
  else
      out = out.concat(right.slice(r));
  
  return out;
}

function mergeSort(arr) {
  if (arr.length <= 1)
      return arr;

  var mid = Math.floor(arr.length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right);
}

// sanity check
a = [4, 5, 6, 3, 2, 1];
console.log(a + ' --> ' + mergeSort(a));
a = [-3, 0, 3, -4];
console.log(a + ' --> ' + mergeSort(a));
a = ['b', 'a', 'A', 'B'];
