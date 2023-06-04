let magicians = ["david", "haroot", "maroot"];
let magicians_2 = Array.from(magicians);
function show_magicians(magiciansList) {
    for (let i = 0; i < magiciansList.length; i++) {
        console.log(magiciansList[i]);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push(magicians[i] + " the great");
    }
    return great_magicians;
}
console.log("Old Updated List : ");
show_magicians(make_great(magicians));
console.log("\nNew Copied List : ");
show_magicians(magicians_2);
export {};
