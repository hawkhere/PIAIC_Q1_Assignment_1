let usernames = ["admin", "Bilal", "Mustafa", "Ikram", "Khurram"];
usernames = [];
if (usernames.length != 0) {
    for (let i = 0; i < usernames.length; i++) {
        let loggedInUser = usernames[i];
        if (loggedInUser == "admin") {
            console.log(`Hello admin, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${loggedInUser}, thank you for logging in again.`);
        }
    }
}
else {
    console.log(`We need to find some users!`);
}
export {};
