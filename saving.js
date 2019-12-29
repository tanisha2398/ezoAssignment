var amount = 0;
var showAmount = document.getElementById("sp-cb");
var ledgerHolder = document.getElementById("ledger-holder");

updateAmount(amount);

setInterval(function() {
  if (amount == 0) return;
  var intrest = amount * 0.04;
  amount = amount + intrest;
  updateAmount(amount.toFixed(2));
  insertIntoTable("Interest Credited", intrest.toFixed(2));
}, 30000);

function updateAmount(newAmount) {
  showAmount.innerText = newAmount;
}

function withdraw() {
  var withdrawAmount = document.getElementById("inp-withdraw").value;
  document.getElementById("inp-withdraw").value = "";
  var isValid = isValidate(withdrawAmount);
  if (!isValid) {
    alert("wrong input");
    return;
  }
  //   withdrawAmount = parseFloat(withdrawAmount).toFixed(2);
  console.log(typeof withdrawAmount);
  if (withdrawAmount > amount) {
    alert("wrong input");
    return;
  } else {
    amount -= withdrawAmount;
    updateAmount(amount.toFixed(2));
    insertIntoTable("Withdraw", `-${withdrawAmount}`);
  }
}

function deposit() {
  var depositAmount = document.getElementById("inp-deposit").value;
  document.getElementById("inp-deposit").value = "";
  var isValid = isValidate(depositAmount);
  if (!isValid) {
    alert("wrong input");
    return;
  }
  //   depositAmount = parseFloat(depositAmount).toFixed(2);
  console.log(typeof depositAmount);
  amount += +depositAmount;
  updateAmount(amount.toFixed(2));
  insertIntoTable("Deposit", depositAmount);
}

function insertIntoTable(naration, transaction) {
  var row = ledgerHolder.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerText = Date(Date.now());
  cell2.innerText = naration;
  cell3.innerText = transaction;
  cell4.innerText = amount.toFixed(2);
}

function isValidate(amount) {
  var reg = /^-?\d+\.?\d*$/;
  return reg.test(amount);
}
