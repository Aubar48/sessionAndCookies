const { v4: uuidv4 } = require('uuid');


const User = function ({name, email, age, color}) {
    this.id = uuidv4();
    this.name = name.trim();
    this.email = email.trim();
    this.age = +age;
    this.color = color;
    this.createAt = new Date;
}

module.exports = User