import inquirer from 'inquirer';
async function calculator() {
    const operation = await inquirer.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'Choose an operation:',
            choices: ['+', '-', '*', '/'],
        },
    ]);
    const { operation: operator } = operation;
    const operands = await inquirer.prompt([
        {
            type: 'number',
            name: 'operand1',
            message: 'Enter the first operand:',
        },
        {
            type: 'number',
            name: 'operand2',
            message: 'Enter the second operand:',
        },
    ]);
    const { operand1, operand2 } = operands;
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            console.log('Invalid operator!');
            return;
    }
    console.log(`${operand1} ${operator} ${operand2} = ${result}`);
}
calculator();
