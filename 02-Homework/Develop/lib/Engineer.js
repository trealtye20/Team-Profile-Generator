const Employee = require("./Employee");

class Engineer extends Employee {
  // TODO: YOUR CODE HERE
  constructor(name, email, id, github) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.github = github;
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

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
