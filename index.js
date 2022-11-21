// Inquirer prompt
// Ask for team manager name
// Employee ID
// Email address
// Office number
// Add engineer or intern?
// If engineer,
// Then prompted to enter name, ID, email, GitHub username
// If intern,
// Then prompted to enter
// Return to menu
// Write test for each part of code
// Optional validate input

// Classes: Employee, Manager, Engineer, Intern
// Employee properties and methods: name, id, email, getName(), getId(), getEmail(), getRole() - returns 'Employee'
// Manager extends Employee: officeNumber, getRole() - overridden to return 'Manager'
// Engineer extends Employee: github (username), getGithub(), getRole() - overridden to return 'Engineer'
// Intern extends employee: school, getSchool(), getrole() - overridden to return 'Intern'

// Directory structure:
// Tests - tests
// Dist - rendered output (HTML) and CSS
// Lib - classes
// Src - template helper code
// .gitignore
// index.js
// package.json

const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./dist/generateHTML.js');

let roster = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'manager-name',
        message: 'Team manager name:',
    },
    {
        type: 'input',
        name: 'manager-id',
        message: 'ID:'
    },
    {
        type: 'input',
        name: 'manager-email',
        message: 'Email address:',
    },
    {
        type: 'input',
        name: 'office-number',
        message: 'Office number:',
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineer-name',
        message: 'Name:',
    },
    {
        type: 'input',
        name: 'engineer-id',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'engineer-email',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub username:',
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'intern-name',
        message: 'Name:',
    },
    {
        type: 'input',
        name: 'intern-id',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'intern-email',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'School:',
    }
];

const addEmployee = [
    {
        type: 'list',
        name: 'engineer-or-intern',
        message: 'Add employee:',
        choices: ['Engineer', 'Intern', 'Finish building team'],
        when(answers){
            switch(answers) {
                case 'Engineer':
                    return addEngineer();
                    break;
                case 'Intern':
                    return addIntern();
                    break;
                case 'Finish building team':
                    return generateHTML();
                    break;
             }
            }
    },
];


function addEngineer {
    inquirer
        .prompt(engineerQuestions).then((answers) => {

        })
}

function init() { 
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('index.html', answers);
            
            function writeToFile(fileName, data) {
                fs.writeFile('index.html', readmeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created file!')
                );
            }
        })

}

init();