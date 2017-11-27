
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  function camel(match) {
    return "-" + match;
  }
  
  return str.replace(/\W|_/g, "-").replace(/\B[A-Z]\B/g, camel).toLowerCase();
}

spinalCase('This Is Spinal Tap');
