function uniteUnique(arr) {
  
  arr = Array.from(arguments); // arr only holds first argument!
  
  return arr.reduce(function(prevArray, nextArray) {
    return prevArray.concat(nextArray.filter(function(valueNext) {
      return prevArray.every(function(valuePrev) {
        return valuePrev !== valueNext;
      });
    }));
  });

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);