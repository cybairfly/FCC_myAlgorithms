
function fearNotLetter(str) {

  var codeStart = str.charCodeAt(0);
  
  for (i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) !== codeStart + i) return String.fromCharCode(codeStart + i);
  }
  
  return undefined;
}

fearNotLetter("abce");

/*

function fearNotLetter(str) {

  var sum1 = 0;
  var sum2 = 0;
  
  for (var full = str.charCodeAt(0); full <= str.charCodeAt(str.length-1); full++) {
    sum1 += full;
  }

  for (var miss = 0; miss < str.length; miss++) {
    sum2 += str.charCodeAt(miss);
  }
  
  return sum1 === sum2 ? undefined : String.fromCharCode(sum1 - sum2);
}

fearNotLetter("abce");

*/