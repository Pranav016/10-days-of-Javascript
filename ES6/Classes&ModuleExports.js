class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getInfo() {
    console.log(`Name is ${this.name} and email is ${this.email}`);
  }
}

module.exports = User;

/*
const User = require("./Classes&ModuleExports.js") //use file path
*/
