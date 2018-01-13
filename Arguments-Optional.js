function addTogether() {
  
  function numOnly(args) {
    return Array.prototype.every.call(args, isNumber);
  }
  
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  
  function addArgs(stack, next) {
    return stack + next;
  }
  
  if (numOnly(arguments)) {
    if (arguments.length >= 2) {
      return [].slice.call(arguments).reduce(addArgs);
    }
    else {
      var arg1 = arguments[0];//create closure variable
      return function(arg2) {
        if (numOnly(arguments)) return arg1 + arg2;
      };
    }
  }
  else return undefined;

}

addTogether(2,3);

/*

function addTogether() {
  
  console.log("------------");
  
  function numOnly(args) {
    var num =  Array.prototype.every.call(args, function(arg) {
      return typeof arg === "number";
    });
    
    //console.log(num);
    return num;
  }
  
  if (numOnly(arguments) && arguments.length === 2) {
    console.log(arguments[0] + " + " + arguments[1]);
    return arguments[0] + arguments[1];
  }
  else if (numOnly(arguments) && arguments.length === 1) {
    arg = arguments[0];

    return function add(num) {
      console.log("numOnly(arguments) ? " + numOnly(arguments));
      console.log(numOnly(arguments) ? arg + " + " + num : undefined);
      return numOnly(arguments) ? arg + num : undefined;
    };
  }
  
  //return arguments[0] + arguments[1];
}

*/
