console.log("=> • Tests for equality and inequality with strings");

let bike = 'Honda';
console.log("Is bike == 'suzuki'? I predict false.")
console.log(bike == 'suzuki')

console.log("Is bike != 'suzuki'? I predict true.")
console.log(bike != 'suzuki')

console.log("=> • Tests using the lower case function");
console.log("Is bike.toLowerCase == 'honda'? I predict true.")
console.log(bike.toLowerCase() == "honda");

console.log("Is bike in UpperCase == 'HONDA'? I predict true.")
console.log(bike.toUpperCase() == "HONDA");


console.log("=> • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
let yearMake = 2023;
console.log("Is yearMake is greater than 2022? I predict true.");
console.log(yearMake > 2022);
console.log("Is yearMake is less than 2023? I predict false.");
console.log(yearMake < 2023);
console.log("Is yearMake is greater than or equal to 2022? I predict true.");
console.log(yearMake >= 2022);
console.log("Is yearMake is less than or equal to 2023? I predict true.");
console.log(yearMake <= 2023);

console.log("=> • Tests using and / or operators");
console.log("Is bike == to Honda AND yearMake is equal to 2022? I predict false.");
console.log(bike == "Honda" && yearMake == 2022);
console.log("Is bike == to Honda OR yearMake is equal to 2022? I predict true.");
console.log(bike == "Honda" || yearMake == 2023);

console.log("=> • Test whether an item is in a array");
let listOfBikes = ["Honda", "Suzuki", "Kawasaki", "Yamaha"];
console.log("Is Honda is in the array? I predict True.");
console.log(listOfBikes.includes("Honda"));
console.log("=> • Test whether an item is not in a array");
console.log("Is BMW is in the array? I predict true.");
console.log(!listOfBikes.includes("BMW"));
console.log("Is Yamaha is in the array? I predict False.");
console.log(!listOfBikes.includes("Yamaha"));

