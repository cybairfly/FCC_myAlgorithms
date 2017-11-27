var Person = function(firstAndLast) {

  var fullName = [firstAndLast.split(' ')[0], firstAndLast.split(' ')[1]];

  this.getFirstName = function() {
    return fullName[0];
  };

  this.getLastName = function() {
    return fullName[1];
  };

  this.getFullName = function() {
    return fullName[0] + " " + fullName[1];
  };

  this.setFirstName = function(setFirstName) {
    if (typeof(setFirstName) == "string") fullName[0] = setFirstName;
    //alert(firstName);
  };

  this.setLastName = function(setLastName) {
    if (typeof(setLastName) == "string") fullName[1] = setLastName;
  };

  this.setFullName = function(setFullName) {
    if (typeof(setFullName) == "string") {
      fullName[0] = setFullName.split(' ')[0]; fullName[1] = setFullName.split(' ')[1];
    }
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();