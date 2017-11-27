
function pairElement(str) {
  
  var arr = str.split('');
  var cpl = {
    A: "T",
    C: "G",
    G: "C",
    T: "A"
  };
  
  for (i=0; i < arr.length; i++) {
    arr[i] = [arr[i], cpl[arr[i]]];
  }

  return arr;
}

pairElement("GATTACA");

/*

function pairElement(str) {
  
  var arr = [];
  var cpl = {
    A: "T",
    C: "G",
    G: "C",
    T: "A"
  };
  
  for (i=0; i < str.length; i++) {
    arr.push([str[i], cpl[str[i]]]);
  }

  return arr;
}

pairElement("GATTACA");

*/
