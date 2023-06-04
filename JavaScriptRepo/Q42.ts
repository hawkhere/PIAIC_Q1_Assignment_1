let magicians: string[] = ["david", "haroot", "maroot"];

function show_magicians(magiciansList: string[]) {
    for (let i = 0; i < magiciansList.length; i++) {
        console.log(magiciansList[i]);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push(magicians[i] + " the great");
    }
    return great_magicians;
}

show_magicians(make_great(magicians));
