import inquirer from "inquirer";
let firstValue = await inquirer.prompt([
    {
        name: "first",
        type: "number",
        message: "Enter first value : "
    }
]);
let secondValue = await inquirer.prompt([
    {
        name: "second",
        type: "number",
        message: "Enter second value : "
    }
]);
// let operator = await inquirer.prompt(
//     [
//         {
//             name: "operatorValue",
//             type: "string",
//             message: "Enter Operator ( + - * / ) : "
//         }
//     ]
// );
const operator = await inquirer.prompt([
    {
        type: 'list',
        name: 'operatorValue',
        message: 'Choose an operation:',
        choices: ['+', '-', '*', '/'],
    },
]);
switch (operator.operatorValue) {
    case '+':
        console.log(`Result : ${firstValue.first + secondValue.second}`);
        break;
    case '-':
        console.log(`Result : ${firstValue.first - secondValue.second}`);
        break;
    case '*':
        console.log(`Result : ${firstValue.first * secondValue.second}`);
        break;
    case '/':
        console.log(`Result : ${firstValue.first / secondValue.second}`);
        break;
    default:
        console.log("invalid operator Entered");
        break;
}
