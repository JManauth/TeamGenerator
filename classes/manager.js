const employee = require('./employee');

class manager extends employee { 
    constructor(name, id, email, employee, office){
        
        super(name, id, email, employee)
        this.office = office;
    }

}

module.exports = manager;