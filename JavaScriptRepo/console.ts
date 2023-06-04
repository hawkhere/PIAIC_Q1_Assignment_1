console.log("Type Script File");
let myName1: string = "Waqas";
let b: boolean = false;
let c: number = 5;
let new1 = 2;

console.log(`MyName is ${myName1} , ${b} , ${c} , new1 is ${typeof new1}`);

// console.log(b);
// console.log(c);

// What is hoisting?
// How to display variables using ? Template Litrals.

// Operators:
let n1 = 1;
let n2 = 2;

console.log(n1 + n2);

let str1 = "1";
let str2 = "2";

console.log(str1 + str2);
console.log(myNameAge("Waqas", 4));

function myNameAge(name: string, age: number): boolean {
    console.log(name);
    console.log(age);
    return true;
}

//Arrow function
const myNameAge1 = (name: string, age: number): boolean => {
    console.log(name);
    console.log(age);
    return true;
}

console.log(myNameAge1("Waqas", 4));

let sum1 = () => console.log("Waqas"); 2 + 2;
console.log(sum1());

///////////////////////////////////////////////////

let number1 = 3;
console.log(result(number1));

function result(number1: number): string {
    if (number1 % 2 == 0)
        return 'even';
    else {
        return 'odd';
    }
}

///////////////////////////////////////////////

let isVovle = 'b';
console.log(`Is \`${isVovle}\` Vovle? : ${isThisVovle(isVovle)}`);

function isThisVovle(isVovle: string): string {
    if (isVovle.match('a') || isVovle.match('e') || isVovle.match('i') || isVovle.match('o') || isVovle.match('u'))
        return 'Yes';
    else {
        return 'No';
    }
}

///////////////////////////////////////////////////

let transportation1: string[];
transportation1 = ['Car', 'Bus', 'Bike'];
console.log(transportation1.pop());
transportation1.push('bike');
console.log(transportation1);
transportation1.unshift('hi');
console.log(transportation1);
transportation1.shift();
console.log(transportation1);
transportation1.slice
///////////////////////////////////////////////////

// 19/03/2023

///////////////////////////////////////////////////

// Prompt:

// const prompt = require("prompt-sync")();

// let x = prompt("Where does the Pope live?");
// let correctAnswer = "Pakistan";
// if (x == correctAnswer) {
//     console.log("Correct!");
// }
// else {
//     console.log('InCorrect');
// }

//////// OBJECTS //////////////
const firstName = "MyName";
const person = {
    firstName: "Waqas",
    lastName: "Ahsan",
    age: 24,
    city: "Lahore",
};

console.log(person);

// ---
let z = 5;
if (true) {
    let z = 3
    console.log(z);
}
console.log(z);
// -------
// Home practice
// Practice Array
let fruits: String[];
fruits = ["apple", "banana", "grapes", "oranges"];
let x = [1, 2, "waqas"];
console.log(fruits.length);
console.log(fruits.pop());
console.log(fruits.length);
console.log(fruits.push("orange"));
console.log(fruits.shift());
console.log(fruits.length);
console.log(fruits.unshift("apple"));
console.log(fruits.length);

// splice
fruits = ["1", "2", "3", "4"];
console.log(fruits);
fruits.splice(2, 0, "5", "6");
console.log(fruits);

fruits = ["1", "2", "3", "4"];
console.log(fruits);
console.log(fruits.slice(1, 3));
console.log(fruits);


let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
let fullNames = [];

for (let i = 0; i < firstNames.length; i++) {
    for (let j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}
console.log(fullNames);


// objects

const person1 = {
    'name#': "Waqas",
    age: 22.
};
// console.log(person1.name);
console.log(person1["name#"]);


