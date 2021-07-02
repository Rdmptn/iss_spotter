const { nextISSTimesForMyLocation } = require('./iss_promised');
const { timeFormatter } = require('./timeFormatter');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    timeFormatter(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
  