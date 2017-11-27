function updateInventory(arr1, arr2) {
  
  var idx;
  
  arr2.forEach(function(itemArr2) {
    idx = arr1.findIndex(function(itemArr1) {
      return itemArr2[1] === itemArr1[1];
    });
    if (idx === -1) arr1.push(itemArr2);
    else arr1[idx][0] += itemArr2[0];
  });
  
  arr1.sort(function(prev, next) {
    return prev[1] < next[1] ? -1 : 1;
  });

  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);