// import Student from "./student";

const Student = require("./student").default;

const song = new Student("재희",22);
console.log(song.getInfo());

module.exports = Student;


