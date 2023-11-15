class person{
    constructor(firstname='john',lastname='smith'){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}
module.exports = new person('Edward','Tuesday');