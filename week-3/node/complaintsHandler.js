const { FINANCE, EMOTIONS, WEATHER } = require('./consts');

 function handleComplaint(complaints) {
  const type = complaints.type;
  switch (type) {
    case FINANCE:
      console.log("Money doesn’t grow on trees, you know.");
      break;
    case EMOTIONS:
      console.log("It’ll pass, as all things do, with time.");
      break;
    case WEATHER:
      console.log("It is the way of nature. Not much to be done.");
      break;
    default:
      return "";
  }
}

  module.exports.handleComplaint = handleComplaint;