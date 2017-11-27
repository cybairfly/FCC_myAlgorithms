
function truncateString(str, num) {

  if (str.length > num) {
    str = num > 3 ? str.slice(0, num-3) : str = str.slice(0, num);
    return str + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
