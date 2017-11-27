
function convertHTML(str) {
  // &colon;&rpar;
  
  var rgx = /&|<|>|'|"/g;
  var obj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    "\"": "&quot;"
  };
  
  return str.replace(rgx, function(match) {
    return obj[match];
  });
  
}

convertHTML("Dolce & Gabbana");
