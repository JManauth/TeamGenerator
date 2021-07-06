const employee = require('./employee');

class engineer extends employee {
    constructor (name, id, email, employee, github){
        super(name, id, email, employee)
        this.github = github;
    }
}

module.exports = engineer;