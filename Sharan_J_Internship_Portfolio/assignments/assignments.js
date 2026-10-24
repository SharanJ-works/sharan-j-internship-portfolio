/*
  JavaScript Practical Assignments 1–6
  Submitted by: Sharan J
  Run with Node.js, or copy one assignment at a time into a browser console.
  Note: prompt() is available in browsers, not in a standard Node.js console.
*/

// ================================
// Assignment 1: Variables, Data Types, and Console Operations
// ================================
console.log("\n========== ASSIGNMENT 1 ==========");
var userName = "Alice";
let age = 25;
const isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"];

console.log(`Name: ${userName} (Type: ${typeof userName})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: ${JSON.stringify(skills)} (Type: ${typeof skills})`);

// ================================
// Assignment 2: Operators, Expressions, and Input Handling
// ================================
console.log("\n========== ASSIGNMENT 2 ==========");
// In a browser, uncomment the two prompt() lines below.
// const billInput = prompt("Enter bill amount:", "100");
// const tipInput = prompt("Enter tip percentage:", "15");
// For a reproducible sample run, use these values:
const billInput = "100";
const tipInput = "15";

const subtotal = Number(billInput);
const tipPercentage = Number(tipInput);

if (!Number.isFinite(subtotal) || subtotal < 0 ||
    !Number.isFinite(tipPercentage) || tipPercentage < 0) {
  console.log("Please enter valid non-negative numbers.");
} else {
  const calculatedTip = subtotal * tipPercentage / 100;
  let totalAmount = subtotal;
  totalAmount += calculatedTip; // assignment operator
  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercentage}%`);
  console.log(`Calculated Tip: $${calculatedTip}`);
  console.log(`Total Amount to Pay: $${totalAmount}`);
}

// ================================
// Assignment 3: Conditional Logic Implementation
// ================================
console.log("\n========== ASSIGNMENT 3 ==========");
const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

switch (grade) {
  case "A":
    grade = "A";
    break;
  case "B":
    grade = "B";
    break;
  case "C":
    grade = "C";
    break;
  case "D":
    grade = "D";
    break;
  default:
    grade = "F";
}
const status = score >= 50 ? "Passed" : "Failed";
console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);

// ================================
// Assignment 4: Loop Control Structures
// ================================
console.log("\n========== ASSIGNMENT 4 ==========");
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n-- First number > 10 divisible by 6 --");
let number = 11;
while (number <= 100) {
  if (number > 10 && number % 6 === 0) {
    console.log(`Found: ${number}`);
    break;
  }
  number++;
}

console.log("\n-- Do...while with continue --");
let counter = 0;
do {
  counter++;
  if (counter === 2 || counter === 4) {
    continue; // Skip these values
  }
  console.log(`Number: ${counter}`);
} while (counter < 5);

// ================================
// Assignment 5: Function Architecture and Scope
// ================================
console.log("\n========== ASSIGNMENT 5 ==========");
function rectangleArea(length = 5, width = 4) {
  return length * width;
}
const rectangleAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${rectangleArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${rectangleAreaArrow(10, 3)}`);

try {
  {
    let blockVar = "Inside block";
    console.log(`Scope inside block: ${blockVar}`);
  }
  // This deliberately demonstrates block scope.
  console.log(blockVar);
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: blockVar is not defined`);
}

// ================================
// Assignment 6: Arrays, Objects, and Core Methods
// ================================
console.log("\n========== ASSIGNMENT 6 ==========");
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

console.log("-- All Products (forEach) --");
products.forEach(product => {
  console.log(`Item: ${product.name} - Price: $${product.price}`);
});

console.log("\n-- Filtered Products (Price < $50) --");
const affordableProducts = products.filter(product => product.price < 50);
console.log(affordableProducts);

console.log("\n-- Mapped Product Tags (map) --");
const productTags = products.map(
  product => `${product.name.toUpperCase()} costs $${product.price}`
);
console.log(productTags);
