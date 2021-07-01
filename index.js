const { nextISSTimesForMyLocation } = require('./iss');

const timeFormatter = function(times) {
  for (time of times) {
    let dateAndTime = new Date();
    dateAndTime.setUTCSeconds(time.risetime);
    let duration = time.duration;
    console.log(`Next pass at ${dateAndTime} for ${duration} seconds!`);
  }
};

    

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  timeFormatter(passTimes);
});