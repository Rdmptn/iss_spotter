const timeFormatter = function(times) {
  for (time of times) {
    let dateAndTime = new Date(0);
    dateAndTime.setUTCSeconds(time.risetime);
    let duration = time.duration;
    console.log(`Next pass at ${dateAndTime} for ${duration} seconds!`);
  }
};

module.exports = { timeFormatter };