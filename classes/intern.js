const employee = require('./employee');

class intern extends employee {
    constructor (name, id, email, employee, school){
        super(name, id, email, employee)
        this.school = school;
    }
}

module.exports = intern;