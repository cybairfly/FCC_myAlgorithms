
function sumFibs(num) {
  
  var fsum = 0;
  
  function fib(a, b) {
    while (b <= num) {
      if (b % 2 !== 0) fsum += b;
      return fib(b, a + b);
    }
    return fsum;
  }
  
  return fib(0, 1);
}

sumFibs(4);