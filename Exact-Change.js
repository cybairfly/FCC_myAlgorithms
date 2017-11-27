function checkCashRegister(price, cash, cid) {
  var returnTotal = (cash - price);
  var leftToPay = returnTotal;
  var cashInSlot,
      useThisSlot,
      payFromSlot,
      slotValue,
      change = [],
      cashTotal = 0;
  var slotValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  cid = cid.reverse();
  for (var i = 0; i < cid.length; i++) {
    slotValue = slotValues[cid[i][0]];
    cashInSlot = cid[i][1];
    useThisSlot = Math.floor(leftToPay / slotValue) >= 1;
    
    if (useThisSlot) {
      payFromSlot = 0;
      payFromSlot = cashInSlot > leftToPay ? 
        (Math.floor(leftToPay / slotValue) * slotValue) : cashInSlot;
      leftToPay = (leftToPay - payFromSlot).toFixed(2);
      cashTotal += cashInSlot;
      change.push([cid[i][0], payFromSlot]);
    }
  }

  if (returnTotal == cashTotal) return "Closed";
  if (leftToPay > 0) return "Insufficient Funds";

  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

/*

function checkCashRegister(price, cash, cid) {
  var returnTotal = (cash - price);
  var leftToPay = returnTotal;
  var cashInSlot,
      useThisSlot,
      payFromSlot,
      slotValue,
      change = [],
      cashTotal = 0;
  var slotValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

    console.log("------------------------------" + returnTotal);

  for (var i = cid.length-1; i >= 0; i--) {
    slotValue = slotValues[cid[i][0]];
      console.log("slotValue " + slotValue);
    cashInSlot = cid[i][1];
      console.log("cashInSlot " + cashInSlot);
    useThisSlot = Math.floor(leftToPay / slotValue) >= 1;
      console.log("useThisSlot " + useThisSlot);
    if (useThisSlot) {
      payFromSlot = 0;
      payFromSlot = cashInSlot > leftToPay ? 
        (Math.floor(leftToPay / slotValue) * slotValue) : cashInSlot;
        console.log("payFromSlot " + payFromSlot);
      leftToPay = (leftToPay - payFromSlot).toFixed(2);
        console.log("leftToPay " + leftToPay);
      cashTotal += cashInSlot;
      change.push([cid[i][0], payFromSlot]);
    }
  }

  if (returnTotal == cashTotal) return "Closed";
  if (leftToPay > 0) return "Insufficient Funds";

  console.log(change);
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
*/