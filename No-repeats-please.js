function permAlone(str) {
  var arr = [], num = 1;

  function norepeat (str) {
    if (!str.match(/(.)\1+/)) arr.push(str);
  }

  function perm (str, num) {
    for (var i = 0; i < num; i++) {
      num < str.length ? perm(str, num + 1) : norepeat(str);
      str = str.substr(1, num-1) + str[0] + str.substr(num);
    }
  }
  
  perm(str, num);
  return arr.length;
}

permAlone('Eliska');