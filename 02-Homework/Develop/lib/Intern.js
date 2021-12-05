const Employee = require("./Employee");

class Intern extends Employee {
  // TODO: YOUR CODE HERE
  constructor(name, email, id, school) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.school = school;
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

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

}

module.exports = Intern;
