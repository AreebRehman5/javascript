let fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits); 


let numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers); 


let colors = ["red", "green", "blue"];
colors.unshift("yellow");
console.log(colors);


let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
days.shift();
console.log(days);


let names = [];
names.push("Alice", "Bob", "Charlie");
console.log(names); 


let number = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); 


let evenNumbers = [];
for (let i = 2; i <= 20; i += 2) {
    evenNumbers.push(i);
}
console.log(evenNumbers); 


let fruit = ["apple", "banana", "orange", "kiwi"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let numbe = [5, 10, 15, 20, 25];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
console.log(total); 


let animals = ["cat", "dog", "elephant", "giraffe"];
let targetAnimal = "elephant";
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === targetAnimal) {
        console.log("Index of " + targetAnimal + ": " + i);
        break;
    }
}

let oddNumbers = [];
for (let i = 1; i <= 15; i += 2) {
    oddNumbers.push(i);
}
console.log(oddNumbers); 





