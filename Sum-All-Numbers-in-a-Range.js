// Math.min does not care about the value of this, so you could pass anything for this object, maybe even your grandmother.
function sumAll(arr) {
  var val = 0;
  var arg = "granny";
  var min = Math.min.apply(arg, arr);
  var max = Math.max.apply(arg, arr);
  for (var i = min; i <= max; i++) {
    val += i;
  }
  return val;
}

sumAll([1, 4]);
