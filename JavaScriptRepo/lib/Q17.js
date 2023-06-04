import guestList from "./Q16.js";
console.log(`Q17: Original List : ${guestList}`);
console.log("=> you can invite only two people for dinner.");
console.log(`guestList.length: ${guestList.length}`);
let size = guestList.length;
for (let i = 0; i < (size - 2); i++) {
    console.log(`I am sorry ${guestList.shift()} we can’t invite you to dinner`);
}
size = guestList.length;
for (let i = 0; i < size; i++) {
    console.log(` ${guestList[i]} still invited to dinner`);
}
console.log(`Remove last 2 items from list`);
for (let i = 0; i < size; i++) {
    console.log(` Removing ${guestList.shift()}`);
}
console.log(`Updated List : ${guestList}`);
