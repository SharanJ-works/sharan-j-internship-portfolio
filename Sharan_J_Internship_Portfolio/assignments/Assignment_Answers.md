# JavaScript Practical Assignments 1–6
**Submitted by: Sharan J**

## Assignment 1: Variables, Data Types, and Console Operations
```javascript
var userName = "Alice";
let age = 25;
const isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"];

console.log(`Name: ${userName} (Type: ${typeof userName})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: ${JSON.stringify(skills)} (Type: ${typeof skills})`);
```
**Expected output**
```text
Name: Alice (Type: string)
Age: 25 (Type: number)
Is Employed: true (Type: boolean)
Skills: ["HTML","CSS","JavaScript"] (Type: object)
```

## Assignment 2: Operators, Expressions, and Input Handling
```javascript
const billInput = prompt("Enter bill amount:", "100");
const tipInput = prompt("Enter tip percentage:", "15");
const subtotal = Number(billInput);
const tipPercentage = Number(tipInput);

const calculatedTip = subtotal * tipPercentage / 100;
let totalAmount = subtotal;
totalAmount += calculatedTip;

console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);
```
**Expected output for inputs 100 and 15**
```text
Subtotal: $100
Tip Percentage: 15%
Calculated Tip: $15
Total Amount to Pay: $115
```
The full project code also validates invalid and negative inputs.

## Assignment 3: Conditional Logic Implementation
```javascript
const score = 85;
let grade;

if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else if (score >= 60) grade = "D";
else grade = "F";

switch (grade) {
  case "A": grade = "A"; break;
  case "B": grade = "B"; break;
  case "C": grade = "C"; break;
  case "D": grade = "D"; break;
  default: grade = "F";
}
const status = score >= 50 ? "Passed" : "Failed";
console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);
```
**Expected output**
```text
Score: 85
Grade: B
Status: Passed
```

## Assignment 4: Loop Control Structures
```javascript
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) console.log(`5 x ${i} = ${5 * i}`);

console.log("-- First number > 10 divisible by 6 --");
let number = 11;
while (number <= 100) {
  if (number > 10 && number % 6 === 0) {
    console.log(`Found: ${number}`);
    break;
  }
  number++;
}

console.log("-- Do...while with continue --");
let counter = 0;
do {
  counter++;
  if (counter === 2 || counter === 4) continue;
  console.log(`Number: ${counter}`);
} while (counter < 5);
```
**Expected output**
```text
-- Multiplication Table of 5 --
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25

-- First number > 10 divisible by 6 --
Found: 12

-- Do...while with continue --
Number: 1
Number: 3
Number: 5
```

## Assignment 5: Function Architecture and Scope
```javascript
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
  console.log(blockVar);
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: blockVar is not defined`);
}
```
**Expected output**
```text
Standard Function Area (Default 5x4): 20
Arrow Function Area (Custom 10x3): 30
Scope inside block: Inside block
Scope Test Error: ReferenceError: blockVar is not defined
```

## Assignment 6: Arrays, Objects, and Core Methods
```javascript
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

console.log("-- All Products (forEach) --");
products.forEach(product => console.log(`Item: ${product.name} - Price: $${product.price}`));

console.log("-- Filtered Products (Price < $50) --");
const affordableProducts = products.filter(product => product.price < 50);
console.log(affordableProducts);

console.log("-- Mapped Product Tags (map) --");
const productTags = products.map(product => `${product.name.toUpperCase()} costs $${product.price}`);
console.log(productTags);
```
**Expected output**
```text
-- All Products (forEach) --
Item: Laptop - Price: $800
Item: Mouse - Price: $25
Item: Keyboard - Price: $45

-- Filtered Products (Price < $50) --
[ { name: 'Mouse', price: 25 }, { name: 'Keyboard', price: 45 } ]

-- Mapped Product Tags (map) --
[ "LAPTOP costs $800", "MOUSE costs $25", "KEYBOARD costs $45" ]
```
