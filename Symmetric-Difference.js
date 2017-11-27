function sym(args) {

  // convert arguments to array
  var argArr = Array.prototype.slice.call(arguments);

  function symDiffUnique(prev, next) {
    return prev
      .concat(next)
      .filter(function(value) {
        return next.indexOf(value) === -1 || prev.indexOf(value) === -1;
      });
  }

  function filter(value, index, array) {
    // filter duplicate keep unique values
    return array.indexOf(value) === index;
  }

  return argArr.reduce(symDiffUnique).filter(filter);
}

sym([1, 2, 3], [5, 2, 1, 4]);

/*

function sym(args) {

  // convert arguments to array
  var argArr = Array.prototype.slice.call(arguments);

  function symDiffUnique(prev, next) {
    return prev.filter(function(valuePrev) {
      return next.every(function(valueNext) {
        return valueNext != valuePrev;
      });
    })
      .concat(next.filter(function(valueNext) {
        return prev.every(function(valuePrev) {
          return valuePrev != valueNext;
        });
      }));
  }

  function filter(value, index, array) {
    // filter duplicate keep unique values
    return array.indexOf(value) === index;
  }

  return argArr.reduce(symDiffUnique).filter(filter);
}

sym([1, 2, 3], [5, 2, 1, 4]);

*/