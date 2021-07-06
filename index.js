//packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');

//const choices = ['Manager', 'Engineer', 'Intern'];
//function that initializes app
function init(){
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What kind of employee are you?',
                choices: [{name: 'Manager', value: 0}, {name:'Engineer', value: 1}, {name:'Intern', value: 2}],
                name: 'Employee',
            }
        ])
        .then((response) => {
            if (response.Employee === 0) {
                    //manager();
                    console.log(response);
                } else if( response.Employee === 1) {
                    console.log('2')
                } else if (response.Employee ===  2){ 
                    console.log('whats up slime')
                };
            }); 
}

//function call to initialize app
init();
