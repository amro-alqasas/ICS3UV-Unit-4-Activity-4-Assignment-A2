// Simple Calculator - Square Root Example
console.log("Welcome to my calculator program.");
console.log("Which operation would you like to perform today?");
console.log("a. add");
console.log("b. subtract");
console.log("c. multiply");
console.log("d. divide");
console.log("e. absolute value");
console.log("f. round");
console.log("g. raise to an exponent");
console.log("h. square root\n");

// User chooses square root
console.log("What operation do you want to choose: h");

// Square root calculation
const number = 9;
console.log(`In order to calculate the square root, you will need to supply a non-negative value: ${number}`);

// Calculate and show result
const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);
