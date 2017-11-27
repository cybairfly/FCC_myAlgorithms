
function destroyer(arr) {
  // Remove all the values

  var args = Array.from(arguments);

  return arr.filter(
    function (value) {
      for (i=1; i < this.length; i++) {
         if (value == this[i]) {
           return false;
         }
      }
      return true;
    }, 
  args);
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
