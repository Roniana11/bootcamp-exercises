const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    const letters = str.toLowerCase().split('');
    letters[0] = letters[0].toUpperCase();
    console.log(letters.join(''));
  };

  const skewerCase = function (str) {
    console.log(str.split("").join("-"));
  };

  return {
    capitalizeFirst,
    skewerCase,
  };
};

const formatter = StringFormatter();

formatter.capitalizeFirst("dorothy"); //should print Dorothy
formatter.skewerCase("blue box"); //should print blue-box
