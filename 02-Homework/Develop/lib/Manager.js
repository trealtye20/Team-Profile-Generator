const Employee = require("./Employee");

class Manager extends Employee {
  // TODO: YOUR CODE HERE
  constructor(name, email, id, officeNumber) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.officeNumber = officeNumber;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getNum() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }

}

module.exports = Manager;
