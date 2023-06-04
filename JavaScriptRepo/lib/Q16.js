let guestList;
guestList = ["Bob", "John", "Milton"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]} Please come to visit us for the dinner tonight`);
}
console.log(`I am sorry to inform you all that ${guestList.shift()} cannot make for the dinner.`);
console.log(`Instead George can join for the dinner.`);
guestList.unshift('George');
// Guest List after removing one guest
console.log(`New Guest List: ${guestList}`);
////////
console.log("Okay guys we found a bigger dinning table");
console.log("=> Adding new guest in the beginning");
guestList.unshift('Bilal');
console.log(guestList);
console.log("=> Adding new guest in the Middle");
guestList.splice(guestList.length / 2, 0, "Khurram");
console.log(guestList);
console.log("=> Use append() to add one new guest to the end of your list.");
guestList.push("Sajjad");
console.log(guestList);
console.log("=> Print a new set of invitation messages, one for each person in your list.");
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]} Please come to visit us for the dinner tonight`);
}
export default guestList;
