//packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./classes/employee');
const manager = require('./classes/manager');


//classes
const managers = [];
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
                    manager1();
                } else if( response.Employee === 'Engineer') {
                    engineer();
                } else if (response.Employee ===  'Intern'){ 
                    intern();
                };
            }); 
};
// function branch for manager
 function manager1(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Office Number:',
                name: 'office',
            }
        ])
        .then((response) => {
            console.log(managers);
            console.log(managers[0].office);
            managers[0].office = response.office;
            console.log(managers);
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
