const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const { allotment } = require("./public/js/committee.js");
const mailerIndividual = require("./public/js/mailerIndividual.js");
const mailerIp = require("./public/js/mailerip.js");
const Individual = require("./models/individual.js");
const IP = require("./models/ip.js");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
const PORT = 8080;

main()
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/MUN");
}

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/individual", (req, res) => {
  res.render("individual.ejs");
});

// form submit for individual reg data extract
app.post("/individual", async (req, res) => {
  const newPerson = new Individual(req.body.data);
  const committeeAllotted = allotment(
    newPerson.CommitteePreference1,
    newPerson.CommitteePreference2
  );
  newPerson.committeeAllotted = committeeAllotted;
  await newPerson.save();
  mailerIndividual(
    newPerson.emailAddress,
    newPerson.fullName,
    newPerson.PortfolioPreference1,
    committeeAllotted
  );
  res.redirect("/");
});

app.get("/ip", (req, res) => {
  res.render("ip.ejs");
});

// form submit for IP reg data extract
app.post("/ip", async (req, res) => {
  const newPerson = new IP(req.body.data);
  newPerson.committeeAllotted = newPerson.role;
  await newPerson.save();
  mailerIp(
    newPerson.emailAddress,
    newPerson.fullName,
    newPerson.committeeAllotted
  );
  res.redirect("/");
});

app.get("/registration", (req, res) => {
  res.render("registration.ejs");
});

app.get("/school", (req, res) => {
  res.render("school.ejs");
});

app.listen(PORT, () => {
  console.log("server working");
});
