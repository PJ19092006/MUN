const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ipSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  munExperience: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  agreeCheckbox: {
    type: String,
    required: true,
  },
  committeeAllotted: {
    type: String,
    required: true,
  },
});

const IP = mongoose.model("IP", ipSchema);
module.exports = IP;
