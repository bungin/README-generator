import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js'
import fs from "fs";
import { type } from 'os';
import Choices from 'inquirer/lib/objects/choices.js';

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
        message: 'Provide a brief description of the proj:',
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
        name: 'credits',
        message: 'Credits:'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Contribution instructions:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Testing instructions:',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Features:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'none']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, generateMarkdown(data), (err) => console.log(err))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers);
            console.log('Success')
        })
        .catch ((err) => {
            console.log(err);
        });
    
}

// Function call to initialize app
init();


