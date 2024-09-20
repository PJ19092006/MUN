const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const individualSchema = new Schema({
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
  CommitteePreference1: {
    type: String,
    required: true,
  },
  CommitteePreference2: {
    type: String,
    required: true,
  },
  PortfolioPreference1: {
    type: String,
    required: true,
  },
  PortfolioPreference2: {
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

const Individual = mongoose.model("Individual", individualSchema);
module.exports = Individual;
