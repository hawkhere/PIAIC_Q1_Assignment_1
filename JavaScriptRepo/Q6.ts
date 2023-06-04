let name2 = "\n \t Peter \n \n\n\n\n\n\n\n\n\t\t\t\t\t\t\t Jakson";
let name3 = "\n \t Peter \n \t Jakson";

console.log(`Before : ${name2} \n After : ${name3.trim().split(`\n`).join('').split('\t').join('').trim().replace(/\s/g, "")}`);
// console.log(`After Stripping whitepaces: ${name2.trim()}`);
