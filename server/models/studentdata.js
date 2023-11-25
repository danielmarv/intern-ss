const mongoose = require("mongoose");
const Faculty = require("./faculty"); // Make sure to provide the correct path

// Assuming you have the faculty data in the specified format
const facultyData = {
  name: {
    firstname: "Admin",
    lastname: "IMS",
  },
  currentClass: {
    year: "2023",
    div: 1,
  },
  emailId: "dntege@bugemauniv.ac.ug",
  department: "Computer Science",
  username: "Admin",
  password: "Admin123",
  designation: "Admin",
  created: new Date(),
  applicationsReceived: [],
  applicationsApproved: [],
};

// Create a new instance of the Faculty model with the provided data
const newFaculty = new Faculty(facultyData);

// Save the new faculty to the database
newFaculty.save()
  .then(savedFaculty => {
    console.log('Faculty saved:', savedFaculty);
  })
  .catch(error => {
    console.error('Error saving faculty:', error);
  });