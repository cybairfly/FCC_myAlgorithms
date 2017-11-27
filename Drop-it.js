
function dropElements(arr, func) {
  // Drop them elements.
  
  while (arr.length && !func(arr[0])) arr.shift();
  return arr;

}

dropElements([1, 2, 3], function(n) {return n < 3; });

/*

function dropElements(arr, func) {
  // Drop them elements.
  
  var index = arr.findIndex(func);
  return index > -1 ? arr.slice(index) : [];

}

dropElements([1, 2, 3], function(n) {return n < 3; });

*/

/*

function dropElements(arr, func) {
  // Drop them elements.
  
  for (i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];  
}

dropElements([1, 2, 3], function(n) {return n < 3; });

*/
