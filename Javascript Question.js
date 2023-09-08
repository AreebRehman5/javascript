Question 1:

let age = prompt("Enter your age:");

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


Question 2:
let name = prompt("Enter your name:");

if (name.toLowerCase() === "john") {
    console.log("Hello, John!");
} else {
    console.log("Hello, stranger!");
}
Question 3:
let length = prompt("Enter the length:");
let width = prompt("Enter the width:");
let area = length * width;

console.log("The area of the rectangle is: " + area);

Question 4:
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");
let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Invalid operator";
}

console.log("Result: " + result);
Question 5:
let age = prompt("Enter your age:");

if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are not a teenager.");
}
Question 6:
const pi = Math.PI;
let radius = parseFloat(prompt("Enter the radius:"));
let height = parseFloat(prompt("Enter the height:"));
let volume = pi * radius * radius * height;

console.log("The volume of the cylinder is: " + volume);
Question 7:
let number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
Question 8:
let grade = prompt("Enter your grade (A, B, C, D, or F):");

if (grade === "A" || grade === "B" || grade === "C" || grade === "D") {
    console.log("You passed.");
} else if (grade === "F") {
    console.log("You failed.");
} else {
    console.log("Invalid grade.");
}
Question 9:
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

let max = Math.max(num1, num2, num3);
let min = Math.min(num1, num2, num3);

console.log("Maximum: " + max);
console.log("Minimum: " + min);

Question 10:
let temperature = parseFloat(prompt("Enter the temperature:"));
let unit = prompt("Enter the unit (C or F):");
let convertedTemperature;

if (unit.toUpperCase() === "C") {
    convertedTemperature = (temperature * 9/5) + 32;
    console.log("Temperature in Fahrenheit: " + convertedTemperature + " °F");
} else if (unit.toUpperCase() === "F") {
    convertedTemperature = (temperature - 32) * 5/9;
    console.log("Temperature in Celsius: " + convertedTemperature + " °C");
} else {
    console.log("Invalid unit.");
}
Question 11:
let number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}
Question 12:
let originalPrice = parseFloat(prompt("Enter the original price:"));
let discountPercentage = parseFloat(prompt("Enter the discount percentage:"));

let discountedPrice = originalPrice * (1 - discountPercentage / 100);

console.log("Discounted price: " + discountedPrice);

Question 13:
let age = prompt("Enter your age:");

if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}
Question 14:
let name = prompt("Enter your name:");

if (name.toLowerCase().startsWith("a")) {
    console.log("Your name starts with 'A'.");
} else {
    console.log("Your name doesn't start with 'A'.");
}
Question 15:
let year = parseInt(prompt("Enter a year:"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}





