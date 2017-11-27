
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keysFind = Object.keys(source);
  
  arr = 
    collection.filter(function(object) {
      return keysFind.every(function(keyFind) {
        return object.hasOwnProperty(keyFind) && // key name can be "undefined"
          object[keyFind] === source[keyFind];
    });
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


/*
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keysQ = Object.keys(source);
  
  arr = collection.filter(function(object) {
    var keep = true;
    for (var q=0; q < keysQ.length; q++) {
      keep = keep && object[keysQ[q]] === source[keysQ[q]] ? true : false;
      // ALWAYS PREFER FALSE &&
    }
    return keep;
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
*/