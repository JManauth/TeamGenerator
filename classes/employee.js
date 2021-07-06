class employee{

    constructor(name, id, email, employee) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.employee = employee;
    }
    printInfo() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.email);
        console.log(this.employee);
    };
}
module.exports = employee;