import inquirer from "inquirer";
import chalk from "chalk";
let current_users = ["admin", "Bilal", "Mustafa", "Ikram", "Khurram"];
let new_users = ["Tayyab", "Bilal", "Mustafa", "Sajjad", "Usman"];
let alreadyExisted = false;
for (let i = 0; i < new_users.length; i++) {
    for (let j = 0; j < current_users.length; j++) {
        if (current_users[j].toLowerCase() == new_users[i].toLowerCase()) {
            console.log(`${new_users[i]} Already Used`);
            let answers = await inquirer.prompt([
                {
                    name: "userName",
                    type: "string",
                    message: "Please enter a new username :"
                }
            ]);
            console.log(chalk.bgBlue("New name is  " + (answers.userName)));
            new_users[i] = answers.userName;
        }
        else {
            alreadyExisted = true;
        }
    }
    if (alreadyExisted) {
        console.log(`${new_users[i]} username is available`);
        alreadyExisted = false;
    }
}
console.log(`current_users : ${current_users}`);
console.log(`new_users : ${new_users}`);
