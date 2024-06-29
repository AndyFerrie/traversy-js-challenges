function calculator(a, b, operator) {
  if (operator === "-") {
    return a - b;
  } else if (operator === "+") {
    return a + b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return "Operator not recognised. Please use -, +, * or /";
  }
}

module.exports = calculator;
