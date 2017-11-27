
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

addTogether(2,3);
