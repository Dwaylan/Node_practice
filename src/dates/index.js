// import moment here; use this package in each function
const moment = require("moment");
// But what is moment?
// Moment is a  JavaScript date library for parsing, validating, manipulating, and formatting dates.

const today = () => {
  // write code for dates.today
  moment().format("[today is] dddd");
  //   quadruple "d" gives us the day of the week.
  console.log(today);
};

const calendar = () => {
  // write code for dates.calendar
  moment().format();
  console.log(calendar);
};

const currentTime = () => {
  // write code for dates.currentTime
};

module.exports = {
  today,
  calendar,
  currentTime,
};
