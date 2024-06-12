#! /usr/bin/env node
// Import inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colourful welcome message
console.log(chalk.bold.magentaBright("\n \t\tWelcome to Word Counter"));
console.log("=".repeat(60));
// Prompt the user to enter the sentence or paragraph to count
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter the Sentence or Paragraph to Count:",
    }
]);
// Trimming the sentence and spliting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// Analysis of user input
console.log("=".repeat(60));
console.log(chalk.bold("Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
