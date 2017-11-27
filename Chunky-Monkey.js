
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  
  for (i = 0; i < arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size));
      //If end is greater than the length of the sequence, slice extracts through the end of the sequence (arr.length).
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
