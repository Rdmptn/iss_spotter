const { nextISSTimesForMyLocation } = require('./iss');
const { timeFormatter } = require('./timeFormatter');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  timeFormatter(passTimes);
});

