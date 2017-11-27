
function myReplace(str, before, after) {
  
  return before.match(/[A-Z]/) === null ? 
    str.replace(before, after) : 
    str.replace(before, after[0].toUpperCase() + after.substring(1));

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
