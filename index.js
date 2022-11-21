const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

let roster = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Team manager name:',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'ID:'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Email address:',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Office number:',
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Name:',
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'ID:',
    },
    {
        type: 'input',
        name: 'engineerEmail',
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
        name: 'internName',
        message: 'Name:',
    },
    {
        type: 'input',
        name: 'internId',
        message: 'ID:',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'School:',
    }
];

const addEmployeeQ = [
    {
        type: 'list',
        name: 'engineerOrIntern',
        message: 'Add employee:',
        choices: ['Engineer', 'Intern', 'Finish building team'],
    }
];

function addManager() {
    inquirer
        .prompt(managerQuestions).then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            roster.push(manager);
            addEmployee();
        });
}

function addEngineer() {
    inquirer
        .prompt(engineerQuestions).then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
            roster.push(engineer);
            addEmployee();
        })
}

function addIntern() {
    inquirer
        .prompt(internQuestions).then((answers) => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
            roster.push(intern);
            addEmployee();
        })
}

function addEmployee() {
    inquirer
        .prompt(addEmployeeQ).then((answers) => {
            switch (answers.engineerOrIntern) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'Finish building team':
                    const HTML = generateHTML(roster);
                    writeToFile('dist/index.html', HTML);
                    break;
            }

        });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created file!')
    );
}

addManager()