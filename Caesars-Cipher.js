
function rot13(str) { // LBH QVQ VG!
//return String.fromCharCode(code - 13 < 65 ? 90 - 12 + code - 65 : code - 13);
  return str.replace(/[A-Z]/g, function () {
    return String.fromCharCode("A".charCodeAt() + arguments[0].charCodeAt() % 26);
  });
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
