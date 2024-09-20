let map = {
  WHO: 10,
  UNEP: 10,
  COPUOS: 10,
  ODC: 10,
  UNSC: 10,
  WHSR: 10,
  UNGA: 10,
  UNHRC: 10,
  UNICEF: 10,
  AIPPM: 10,
  CSW: 10,
};

const allotment = (CommitteePreference1, CommitteePreference2) => {
  let committeeAllotted = "";

  // Check first preference
  if (map[CommitteePreference1] > 0) {
    committeeAllotted = CommitteePreference1;
    map[CommitteePreference1]--;
    console.log(`${CommitteePreference1} is allotted to you`);
  }
  // Check second preference if the first one is not available
  else if (map[CommitteePreference2] > 0) {
    committeeAllotted = CommitteePreference2;
    map[CommitteePreference2]--;
    console.log(`${CommitteePreference2} is allotted to you`);
  }
  // If neither preference has available seats
  else {
    console.log("Sorry, both of your preferred committees are full.");
  }

  // Log the allotted committee for confirmation
  console.log(`Allotted committee: ${committeeAllotted}`);

  return committeeAllotted; // Return the allotted committee
};

module.exports = { allotment };
