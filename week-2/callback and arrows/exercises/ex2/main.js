const getTime = (func) => {
  const time = new Date();
  func(time);
};

const returnTime = function (time) {
  alert("The current time is: " + time);
};

getTime(returnTime);
