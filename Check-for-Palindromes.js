
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().match(/[a-zA-Z0-9]/g);

  for (i=0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length-i-1]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");
