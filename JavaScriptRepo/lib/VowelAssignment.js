import inquirer from "inquirer";
let isVovle = await inquirer.prompt([
    {
        name: "alphabet",
        type: "string",
        message: "Enter an alphabet : "
    }
]);
console.log(`Is \`${isVovle.alphabet}\` Vole? : ${isThisVovle(isVovle.alphabet)}`);
function isThisVovle(isVovle) {
    if (isVovle.toLowerCase() == 'a' || isVovle.toLowerCase() == 'e' || isVovle.toLowerCase() == 'i' || isVovle.toLowerCase() == 'o' || isVovle.toLowerCase() == 'u')
        return 'Yes';
    else {
        return 'No';
    }
}
