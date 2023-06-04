let magicians = ["david", "haroot", "maroot"];
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
show_magicians(make_great(magicians));
export {};
