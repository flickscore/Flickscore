//takes in array of movies objects and returns them ordered by movieScore
function divide(arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  return merge(divide(left), divide(right));
}
function merge(left, right) {
  let result = [];
  leftLen = left.length;
  rightLen = right.length;
  l = 0;
  r = 0;
  while (l < leftLen && r < rightLen) {
    if (left[l].movieScore < right[r].movieScore) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}
