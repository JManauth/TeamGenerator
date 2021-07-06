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
                    managerClass.printInfo();
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
                };
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
            console.log(managers[managers.length]);
            managers[0].office = response.office;
            console.log(managers);
            if (response.choice === 0) {
                init();
            } else if (response.choice === 1) {
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
            }
        ])
        .then((response) => {
            console.log(engineers);
            console.log(engineers[0].github);
            engineers[0].github = response.github;
            console.log(engineers);
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
            }
        ])
        .then((response) => {
            console.log(interns);
            console.log(interns[0].school);
            interns[0].school = response.school;
            console.log(interns);
        })
}

//function call to initialize app
init();
