function pairwise(arr, arg) {
  var sum = 0;
  
  for (var idx in arr) {
    // iterate indices of the array
    for (var add = + idx + 1; add < arr.length; add++) {
      // !!! convert indices to integers by prepending +
      if (arr[idx] + arr[add] == arg) {
        sum += +idx+add;
        arr[idx] = NaN; //or delete;
        arr[add] = NaN; //or delete;
        break; //optional to prevent looping further indices
      }
    }
  }
  
  return sum;
}

pairwise([1,4,2,3,0,5], 7);

/*

function pairwise(arr, arg) {
  
  var del;

  arr = arr.reduce(function(acc, cur, idx1, all) {
    del = all.findIndex(function(val, idx2) {
      return idx2 != idx1 && val == arg - cur;
    });
    if (del != -1) {
      delete all[idx1];
      delete all[del];
      return acc.concat(idx1, del);
    }
    return acc;
  }, []);

  return arr.reduce(function(acc, cur) {
    return acc + cur;
  }, 0);

}

pairwise([1,4,2,3,0,5], 7);

*/