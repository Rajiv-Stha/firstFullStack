const mongoose = require("mongoose");

module.exports = async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://noteapp:rajiv@cluster0.kzpliiq.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
};
