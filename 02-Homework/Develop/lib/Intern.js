const Employee = require("./Employee");

class Intern extends Employee {
  // TODO: YOUR CODE HERE
  constructor(name, email, id, school) {
    super(name, id, email)
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

}

module.exports = Intern;
