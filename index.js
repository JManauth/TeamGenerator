//packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');

//classes

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
                name: 'Employee',
            }
        ])
        .then((response) => {
            if (response.Employee === 'Manager') {
                    manager();
                } else if( response.Employee === 'Engineer') {
                    engineer();
                } else if (response.Employee ===  'Intern'){ 
                    intern();
                };
            }); 
};
// function branch for manager
function manager(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Office Number:',
                name: 'office',
            }
        ])
        .then((response) => {
            console.log(response);
        })
};

//function branch for engineer
function engineer () {
    inquirer
        .prompt([
            {
            type: 'input',
            message: 'Github username:',
            name: 'github',
            }
        ])
        .then((response) => {
            console.log(response);
        })
};

//function branch for intern
function intern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'School:',
                name: 'school',
            }
        ])
        .then((response) => {
            console.log(response);
        })
}

//function call to initialize app
init();
