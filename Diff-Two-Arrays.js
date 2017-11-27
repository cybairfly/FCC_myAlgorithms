
function diffArray(arr1, arr2) {

  arr1 = arr1.filter(function(val1) {
    var keep = true;
    arr2 = arr2.filter(function(val2) {
      if (val1 === val2) keep = false;
      return val1 !== val2;
    });
    return keep;
  });

  // Same, same; but different.
  return arr1.concat(arr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
