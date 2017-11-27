
function findLongestWord(str) {
  var arr = str.split(" ");
  str = arr.reduce(function(prev, next) {
    return prev.length > next.length ? prev : next;
  });
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
