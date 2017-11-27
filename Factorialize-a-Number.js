
function factorialize(num) {

  var arr = [];
  
  while (num > 0) {
    arr.unshift(num);
    num--;
  }
  
  console.log(arr);
  
  newArr = arr.reduce(
    function(prev, next) {
      return prev * next;
    }, 1
  );
  return newArr;
}

factorialize(5);
