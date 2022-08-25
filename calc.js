function insert(number) {
  if (document.getElementById("conta").innerHTML == "0") {
    if (number == "*" || number == "/" || number == "-" || number == "+") {
    } else {
      document.getElementById("conta").innerHTML = number;
    }
  } else {
    var prev = document.getElementById("conta").innerHTML;
    document.getElementById("conta").innerHTML = prev + number;
  }
}

function ce() {
  document.getElementById("conta").innerHTML = "0";
}

function calcula() {
  operation = document.getElementById("conta").innerHTML;
  document.getElementById("conta").innerHTML = eval(operation);
}
