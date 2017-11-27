
function sumPrimes(num) {
  
  var primes = [2];
  var sqrtNum = Math.sqrt(num);
  
  function checkPrime(number) {
    for (var prime = 0; prime < primes.length; prime++) {
      if (number % primes[prime] === 0) return false;
      if (primes[prime] > sqrtNum) break;
    }
    return true;
  }
  
  for (var number = 3; number <= num; number += 2) {
    if (checkPrime(number)) primes.push(number);
  }
  
  return primes.reduce(function(prev, next) {
    return prev + next;
  });
}

sumPrimes(10);

/*
function sumPrimes(num) {
  
  var primes = [2];
  var sqrtNum = Math.sqrt(num);
  console.log("---------------");
  
  for (var dividend = 3; dividend <= num; dividend += 2) {
    var isPrime = true;
    for (var prime = 0; prime < primes.length; prime++) {
      if (primes[prime] > sqrtNum) break;
      if (dividend % primes[prime] === 0) {
        //console.log(dividend + " % " + primes[prime]);
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(dividend);
  }
  
  var sum = primes.reduce(function(prev, next) {
    console.log(prev + next);
    return prev + next;
  });
  console.log(sum);
  return sum;
}

sumPrimes(10);
*/

/*
RECURSIVE SOLUTION

function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number){
      if (number % 2 === 0) return false;
      for (i = 2; i < number; i++){
          if(number % i === 0){
          // return true if it is divisable by any number that is not itself. 
             return false;
          }
       }
       // if it passes the for loops conditions it is a prime
      return true;
  }
  // 1 is not a prime, so return nothing, also stops the recusrive calls.
  if (num === 1){
    return 0;
  }

  if (num === 2){
    return 2;
  }
  
  // Check if your number is not prime
  if(isPrime(num) === false){
  // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }

  // Check if your number is prime
  if(isPrime(num) === true){
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}
*/
