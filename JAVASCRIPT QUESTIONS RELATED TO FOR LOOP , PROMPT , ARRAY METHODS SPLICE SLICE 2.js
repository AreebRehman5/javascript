let number = parseInt(prompt("Enter a number:"));
let numbersArray = [10, 20, 30, 40, 50];

if (numbersArray.includes(number)) {
  console.log("The number is found in the array.");
} else {
  console.log("The number is not found in the array.");
}

let sentence = prompt("Enter a sentence:");
let wordsArray = sentence.split(" ");
let hyphenatedSentence = wordsArray.join("-");

console.log("Hyphenated Sentence:", hyphenatedSentence);

let studentNames = ["Alice", "Bob", "Charlie", "David"];
let enteredName = prompt("Enter a student name:");

let index = studentNames.indexOf(enteredName);

if (index !== -1) {
  console.log("Student found at index:", index);
} else {
  console.log("Student not found in the array.");
}

let programmingLanguages = ["JavaScript", "Python", "Java", "C#", "Ruby", "Swift"];
let enteredLanguage = prompt("Enter a programming language:");

if (programmingLanguages.includes(enteredLanguage)) {
  let index = programmingLanguages.indexOf(enteredLanguage);
  console.log("Language found at index:", index);
} else {
  programmingLanguages = programmingLanguages.concat(enteredLanguage);
  console.log("Language added to the array.");
}


let carModels = ["Toyota Camry", "Honda Civic", "Ford Mustang", "Tesla Model 3"];
let enteredModel = prompt("Enter a car model:");

let index = carModels.indexOf(enteredModel);

if (index !== -1) {
  let words = enteredModel.split(" ");
  words.forEach(word => console.log(word));
} else {
  console.log("Model not found. Try another one.");
}

let animalNames = ["Lion", "Tiger", "Bear", "Elephant"];
let enteredAnimal = prompt("Enter an animal name:");

if (animalNames.includes(enteredAnimal)) {
  animalNames = animalNames.concat(enteredAnimal);
  console.log("Animal added to the array.");
} else {
  console.log("Array of animals:", animalNames.join(", "));
}

let evenNumbers = [2, 4, 6, 8, 10];
let enteredNumber = parseInt(prompt("Enter a number:"));

if (evenNumbers.includes(enteredNumber)) {
  let index = evenNumbers.indexOf(enteredNumber);
  console.log("Number found at index:", index);
} else {
  let digits = enteredNumber.toString().split("");
  digits.forEach(digit => console.log(digit));
}

let countries = ["USA", "Canada", "France", "Germany", "India", "Japan"];
let enteredCountry = prompt("Enter a country name:");

if (countries.includes(enteredCountry)) {
  console.log("The entered country exists in the array.");
} else {
  console.log("The entered country does not exist in the array.");
}

let languages = ["JavaScript", "Python", "Java", "C#", "Ruby", "Swift"];
let enteredLanguage = prompt("Enter a programming language:");

if (languages.includes(enteredLanguage)) {
  let index = languages.indexOf(enteredLanguage);
  console.log("Language found at index:", index);
} else {
  languages = languages.concat(enteredLanguage);
  console.log("Language added to the array.");
}

console.log("Updated array of languages:", languages.join(", "));

let colors = ["red", "green", "blue", "yellow", "purple"];

for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 4) {
    colors[i] += " (long name)";
  }
}

console.log("Updated array of colors:", colors);



