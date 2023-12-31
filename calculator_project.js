#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { sum, subtraction, multiplication, division } from "./functions.js";
let operatorChoices = ["Addition (+)", "Subtraction (-)", "multiplication (*)", "Division (/)"];
let answers = [
    {
        type: "number",
        name: "num1",
        message: chalk.green("Enter first number:"),
        validate: (input) => {
            if (isNaN(input)) {
                return `Please enter a number.`;
            }
            return true;
        }
    },
    {
        type: "number",
        name: "num2",
        message: chalk.green("Enter second number"),
        validate: (input) => {
            if (isNaN(input)) {
                return `Please enter a number.`;
            }
            return true;
        }
    },
    {
        type: "list",
        name: "operation",
        message: chalk.yellowBright("Select the operation that you want:"),
        choices: operatorChoices,
    }
];
let answer = [
    {
        name: "again",
        type: "confirm",
        message: "Do you want to calculate again?"
    }
];
(async () => {
    await showBanner('calculator', `This calculator can perform multiplication, division, addition and subtraction`);
})();
async function calculator() {
    let condition = true;
    while (condition) {
        let { num1, num2, operation } = await inquirer.prompt(answers);
        if (operation === operatorChoices[0]) {
            console.log(chalk.green(`Your answer is ${chalk.white(sum(num1, num2))}`));
        }
        else if (operation === operatorChoices[1]) {
            console.log(`Your answer is ${chalk.bold.red(subtraction(num1, num2))}`);
        }
        else if (operation === operatorChoices[2]) {
            console.log(`Your answer is ${chalk.bold.red(multiplication(num1, num2))}`);
        }
        else if (operation === operatorChoices[3]) {
            console.log(`Your answer is ${chalk.bold.red(division(num1, num2))}`);
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
}
setTimeout(() => {
    calculator();
}, 2000);
