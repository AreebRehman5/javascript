// Question 1:
 let numbers = [1, 2, 3, 4, 5];
 numbers.splice(1, 1);
 console.log(numbers); 
// Question 2:
 let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
 fruits.splice(2, 2, "strawberry", "pineapple");
console.log(fruits); 

// Question 3:
 let colors = ["red", "green", "blue", "yellow", "purple"];
 let slicedColors = colors.slice(1, 3);
 console.log(slicedColors); 

// Question 4:
let numbers = [10, 20, 30, 40, 50];
 let lastThree = numbers.slice(-3);
 console.log(lastThree); 

// Question 5:
let grades = [85, 92, 78, 64, 90];
let lowestGrade = grades[0];
 for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowestGrade) {
        lowestGrade = grades[i];
     }
 }
 console.log("Lowest grade: " + lowestGrade);

// Question 6:
 let numbers = [3, 6, 9, 12, 15];
 let sum = 0;
 for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
 }
 console.log("Sum: " + sum);

// Question 7:
// let colors = ["red", "green", "blue", "yellow", "purple"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }
// Question 8:
// let prices = [25, 30, 15, 10, 50];
// let highestPrice = prices[0];
// let highestPriceIndex = 0;
// for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > highestPrice) {
//         highestPrice = prices[i];
//         highestPriceIndex = i;
//     }
// }
// console.log("Index of highest price: " + highestPriceIndex);

// // Question 9:
// let words = ["cat", "dog", "elephant", "giraffe", "lion"];
// let pluralWords = [];
// for (let i = 0; i < words.length; i++) {
//     pluralWords.push(words[i] + "s");
// }
// console.log(pluralWords);

// Question 10:
// let fruits = ["apple", "banana", "cherry", "date", "fig"];
// let selectedFruits = fruits.slice(2, 4);
// console.log(selectedFruits); 

// Question 11:
// let temperatures = [72, 78, 82, 88, 95];
// let daysAbove80 = 0;
// for (let i = 0; i < temperatures.length; i++) {
//     if (temperatures[i] > 80) {
//         daysAbove80++;
//     }
// }
// console.log("Days with temperatures above 80: " + daysAbove80);
// Question 12:
 let numbers = [5, 10, 15, 20, 25];
 numbers.splice(2, 0, 12);
 console.log(numbers); 


// Question 13:
 let words = ["apple", "banana", "cherry", "date", "fig"];
 for (let i = words.length - 1; i >= 0; i--) {
    if (words[i].length > 5) {
       words.splice(i, 1);
     }
 }
 console.log(words);

// Question 14:
let value = [5, 10, 15, 20, 25];
 let userInput = parseInt(prompt("Enter a number:")); let newArray = [];
 for(let i = 0; i < values.length; i++) {
    if (values[i] < userInput) {
        newArray.push(values[i]);
    }
 }
 console.log(newArray);


// Question 15:
//let fruits = ["apple", "banana", "cherry", "date", "fig"];
//console.log(fruits);
//let indexToRemove = +(prompt("Enter the index of the fruit to remove:"));
//fruits.splice(indexToRemove, 1);
//console.log(fruits);





