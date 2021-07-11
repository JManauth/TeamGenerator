//packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./classes/manager');
const engineer = require('./classes/engineer');
const intern = require('./classes/intern');
const { type } = require('os');


//classes
const managers = [];
const engineers = [];
const interns = [];
const initialHTML = (
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/css/reset.css">
        <link rel="stylesheet" href="./assets/css/stylesheet.css">
        <title>Team Roster</title>
    </head>
    <body>
            <div class="header">
                <h1 id="title">MY TEAM</h1>
            </div>
        <div class="cards">`
);
const endingHTML = (
    `</div>
    </body>
    </html>`
);

//const choices = ['Manager', 'Engineer', 'Intern'];
//function that initializes app
function init(){
    inquirer
        .prompt([
            {
                type: 'input',
                message:'Employee name:',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Employee ID:',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Employee Email',
                name: 'email',
            },
            {
                type: 'list',
                message: 'What kind of employee are you?',
                choices: [{name: 'Manager', value: 'Manager'}, {name:'Engineer', value: 'Engineer'}, {name:'Intern', value: 'Intern'}],
                name: 'employee',
            }
        ])
        .then((response) => {
            if (response.employee === 'Manager') {
                    const managerClass = new manager(response.name, response.id, response.email, response.employee, 0);
                    managers.push(managerClass);
                    managerQ();
                } else if( response.employee === 'Engineer') {
                    const engineerClass = new engineer(response.name, response.id, response.email, response.employee, 0)
                    engineers.push(engineerClass);
                    engineerQ();
                } else if (response.employee ===  'Intern'){ 
                    const internClass = new intern(response.name, response.id, response.email, response.employee, 0)
                    interns.push(internClass);
                    internQ();
                }
            });
        };

// function branch for manager
 function managerQ(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Office Number:',
                name: 'office',
            },
            {
                type: 'list',
                message: 'Add another team member?',
                choices: [{name: 'Yes', value: 0}, {name:'No', value: 1}],
                name: 'choice',
            }
        ])
        .then((response) => {
            let i = managers.length;
            let b = 1;
            let c = i - b;
            managers[c].office = response.office;
            let managercard = (
                `\n
                <div class="card">
                <div id="cardhead">
                <h1>${managers[c].name}</h1>
                <h2>Manager</h2>
                </div>
                <p>ID: ${managers[c].id}</p>
                <p>Email: ${managers[c].email}</p>
                <p>office number: ${managers[c].office}</p>
                </div>`
            );
            fs.appendFileSync('index.html', managercard, (err) =>
            err ? console.error(err) : console.log('html appended')
            );
            //console.log(managers);
            if (response.choice === 0) {
                init();
            } else if (response.choice === 1) {
                endHTML();
                return;
            }
        })
};

//function branch for engineer
function engineerQ () {
    inquirer
        .prompt([
            {
            type: 'input',
            message: 'Github username:',
            name: 'github',
            },
            {
                type: 'list',
                message: 'Add another team member?',
                choices: [{name: 'Yes', value: 0}, {name:'No', value: 1}],
                name: 'choice',
            }
        ])
        .then((response) => {
            let i = engineers.length;
            let b = 1;
            let c = i - b;
            engineers[c].github = response.github;
            //console.log(engineers);
            let engineercard = (
                `\n
                <div class="card">
                <div id="cardhead">
                <h1>${engineers[c].name}</h1>
                <h2>Manager</h2>
                </div>
                <p>ID: ${engineers[c].id}</p>
                <p>Email: ${engineers[c].email}</p>
                <p>Github: ${engineers[c].github}</p>
                </div>`
            );
            fs.appendFileSync('index.html', engineercard, (err) =>
            err ? console.error(err) : console.log('html appended')
            );
            if (response.choice === 0) {
                init();
            } else if (response.choice === 1) {
                endHTML();
                return;
            }
        })
};

//function branch for intern
function internQ() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'School:',
                name: 'school',
            },
            {
                type: 'list',
                message: 'Add another team member?',
                choices: [{name: 'Yes', value: 0}, {name:'No', value: 1}],
                name: 'choice',
            }
        ])
        .then((response) => {
            let i = interns.length;
            let b = 1;
            let c = i - b;
            interns[c].school = response.school;
            //console.log(interns);
            let interncard = (
                `<div class="card">
                <div id="cardhead">
                <h1>${interns[c].name}</h1>
                <h2>Manager</h2>
                </div>
                <p>ID: ${interns[c].id}</p>
                <p>Email: ${interns[c].email}</p>
                <p>School: ${interns[c].school}</p>
                </div>`
            );
            fs.appendFileSync('index.html', interncard, (err) =>
            err ? console.error(err) : console.log('html appended')
            );
            if (response.choice === 0) {
                init();
            } else if (response.choice === 1) {
                endHTML();
                return;
            }
        })
}
//this function uses the user's input to create an HTML file

function makeHTML() {
    fs.writeFileSync('index.html', initialHTML, (err) => 
    err ? console.error(err) : console.log('success!')
    );
};

function endHTML() {
    fs.appendFileSync('index.html', endingHTML, (err) =>
    err ? console.error(err) : console.log ('HTML closed out!')
    );
}
//function call to initialize app
init();
makeHTML();
