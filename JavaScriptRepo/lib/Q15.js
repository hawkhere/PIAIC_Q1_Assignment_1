let guestList;
guestList = ["Bob", "John", "Milton"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]} Please come to visit us for the dinner tonight`);
}
console.log(`I am sorry to inform you all that ${guestList.shift()} cannot make for the dinner.`);
console.log(`Instead George can join for the dinner.`);
guestList.unshift('George');
// Guest List after removing one guest
console.log("New Guest List");
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]} Please come to visit us for the dinner tonight`);
}
export {};
