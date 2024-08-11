const mongoose = require("mongoose");

mongoose
  .connect('mongodb+srv://userone:userone@cluster0.d05tceu.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to DB: ",error);
  });
