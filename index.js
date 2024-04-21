#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: chalk.green("Enter first number"), type: "number", name: "firstNumber" },
    { message: chalk.green("Enter second number"), type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Percentage"],
    },
]);
if (answer.operator === "Addition") {
    console.log(chalk.magentaBright("Your value is " + (answer.firstNumber + answer.SecondNumber)));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.magentaBright("Your value is " + (answer.firstNumber - answer.SecondNumber)));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.magentaBright("Your value is " + (answer.firstNumber * answer.SecondNumber)));
}
else if (answer.operator === "Division") {
    console.log(chalk.magentaBright("Your value is " + (answer.firstNumber / answer.SecondNumber)));
}
else if (answer.operator === "Modulus") {
    console.log(chalk.magentaBright("Your value is " + (answer.firstNumber % answer.SecondNumber)));
}
else if (answer.operator === "Percentage") {
    console.log(chalk.magentaBright("Your value is " + (answer.firstNumber / answer.SecondNumber * 100) + "%"));
}
else {
    console.log(chalk.redBright("Please select valid operator"));
}
