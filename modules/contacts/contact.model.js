const mongoose = require("mongoose");

// Define a schema for your model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: Number,
  email: String,
  address: String,
});

// Create the model using the schema
module.exports = mongoose.model("Contact", contactSchema);
