
function findElement(arr, func) {

  return arr.filter(func)[0];

}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


/*

function findElement(arr, func) {
  var num = 0;
  
  for (i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

*/