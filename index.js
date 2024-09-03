#!/usr/bin/env node
// Install the necessary dependencies:
// npm install inquirer
import inquirer from 'inquirer';
async function main() {
    const { firstNumber, operator, secondNumber } = await inquirer.prompt([
        {
            type: 'number',
            name: 'firstNumber',
            message: 'Enter the first number:',
        },
        {
            type: 'list',
            name: 'operator',
            message: 'Select an operation:',
            choices: ['+', '-', '*', '/'],
        },
        {
            type: 'number',
            name: 'secondNumber',
            message: 'Enter the second number:',
        },
    ]);
    let result;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            console.log('Invalid operator.');
            return;
    }
    console.log(`Result: ${result}`);
}
main();
