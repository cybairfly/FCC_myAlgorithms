
function steamrollArray(arr) {

  function flatten(arr) {
    return arr.reduce(function(prev, next) {
      if (Array.isArray(next)) {
        return prev.concat(flatten(next));
      }
    return prev.concat(next);
    }, []);
  }
  
  return flatten(arr);
}

steamrollArray([1, [2], [3, [[4]]]]);

/*

function steamrollArray(arr) {

  var flat = [];

  function flatten (item) {
    if (Array.isArray(item)) {
      item.forEach(function(each) {
        flatten(each);
      });
    }
    else {
      flat.push(item);
    }
  }

  arr.forEach(flatten);
  return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);

*/