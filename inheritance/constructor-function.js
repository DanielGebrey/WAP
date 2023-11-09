function User(name){
    this.name = name;
    this.isAdmin = false;
}

const user1 = new User('john');
console.log(user1);