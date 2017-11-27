function orbitalPeriod(arr) {
  
  for (var i = 0; i < arr.length; i++) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    var orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3)/GM);
    orbitalPeriod = Math.round(orbitalPeriod);

    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = orbitalPeriod;
  }

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
