class employee{

    constructor(name, id, email, employee) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.employee = employee;  
    }
    
}
function getName(){
    console.log(this.name);
};
function getId(){
    console.log(this.id);
}
function getEmail(){
    console.log(this.email);
};
function getRole(){
    console.log(this.employee);
}
module.exports = employee;