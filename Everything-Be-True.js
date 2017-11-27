
function truthCheck(collection, pre) {

  function checkTruth (prev, next) {
    return next[pre] ? prev : false;
  }

  return collection.reduce(checkTruth, true);
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


/*

function truthCheck(collection, pre) {
  
  function checkTruth(object) {
    return object[pre]; // return truthy - omitted object.hasOwnProperty(pre)
  }
  
  return collection.every(checkTruth);
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

*/