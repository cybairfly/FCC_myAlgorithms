
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  function sort (one, two) {
    return one - two;
  }
  
  arr.push(num);

  return arr.sort(sort).indexOf(num);
}

getIndexToIns([40, 60], 50);
