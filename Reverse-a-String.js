
function reverseString(str) {
  arr = str.split('');
  arr.reverse();
  newStr = arr.join('');
  return newStr;
}

alert (reverseString("hello"));
