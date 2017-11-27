
function smallestCommons(arr) {
  
  //var max = Math.max.apply(null, arr);
  arr = arr.sort(function(prev, next) {
    return prev - next;
  });
  
  function gcd(a, b) {  //greatest common divisor
    return b === 0 ? a : gcd(b, a % b);
  }
  
  function lcmPair(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  var lcm = 1;
  
  for (i = arr[0]; i <= arr[1]; i++) {
    lcm = lcmPair(lcm, i);
  }

  return lcm;
}

smallestCommons([1,5]);


/*
function smallestCommons(arr) {
  
  function common(multiple) {
    for (var divisor = arr[1]; divisor >= arr[0]; divisor--) {
      if (multiple % divisor !== 0) {
        return false;
      }
    }
    return true;
  }

  //var max = Math.max.apply(null, arr);
  arr = arr.sort(function(prev, next) {
    return prev - next;
  });

  var multiple = arr[1];
  
  while (!common(multiple)) {
    multiple += arr[1];
  }

  return multiple;
}


smallestCommons([1,5]);
*/