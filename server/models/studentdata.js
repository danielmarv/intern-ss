const mongoose = require("mongoose");
const Student = require("./student"); // Make sure to provide the correct path

// Assuming you have the data in the specified format
const inputData = {
  name: {
    firstname: "Daniel",
    lastname: "Marvin",
  },
  rollNo: 123,
  currentClass: {
    year: "2023",
    div: 1,
  },
  prevSemAttendance: 80,
  emailId: "danientege785@gmail.com",
  marksheets: [],
  username: "joshic",
  password: "123",
  created: new Date(),
  internships: [] // Assuming you want to start with an empty array
};

// Create a new instance of the Student model with the provided data
const newStudent = new Student(inputData);

// Save the new student to the database
newStudent.save()
  .then(savedStudent => {
    console.log('Student saved:', savedStudent);
  })
  .catch(error => {
    console.error('Error saving student:', error);
  });
