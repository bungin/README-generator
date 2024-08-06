import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js'

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
        name: 'ToC',
        message: 'Input Table of Contents',
    },
    {
        type: 'input',
        name: 'installation',
        message: '',
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    console.log(questions)
}

// Function call to initialize app
init();
