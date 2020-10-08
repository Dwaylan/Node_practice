// import moment here; use this package in each function
const moment = require("moment");
// But what is moment?
// Moment is a  JavaScript date library for parsing, validating, manipulating, and formatting dates.
// https://momentjs.com/docs/#/use-it/

const today = () => {
  // write code for dates.today
  let currentDate = moment().format("dddd");
  // I created a variable called currentDate that is called but the today function
  // Quadruple "d" gives us the day of the week.
  // I will create variables and use case sensitive tokens to do the same for the following
  // functions
  return currentDate;
};
console.log(currentDate);

const calendar = () => {
  // write code for dates.calendar
  let calendarDate = moment().format("DD MM YYYY");
  return calendarDate;
};
console.log(calendar);

const currentTime = () => {
  // write code for dates.currentTime
  let timeOfDay = moment().format("hh:mm:ss A");
  return timeOfDay;
};
console.log(currentTime);

module.exports = {
  // this exports our today,calendar, and current time to the tests
  today,
  calendar,
  currentTime,
};
