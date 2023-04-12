const peopleList = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");
const getPeopleInCity = (peopleList) => {
  return getFirstNames(peopleList);
};
module.exports = getPeopleInCity;
