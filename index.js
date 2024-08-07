import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js'
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'title',
        message: 'README title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of the proj.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Install instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Intended usage:',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Contribution instructions:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Testing instructions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, generateMarkdown(data), (err) => console.log(err))
}

// TODO: Create a function to initialize app
function init() {
    console.log(questions)
}

// Function call to initialize app
init();


