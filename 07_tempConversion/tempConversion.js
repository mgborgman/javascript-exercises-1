const ftoc = function(temp) {
  let tempInCelcius = 0;
  tempInCelcius = ((temp - 32) / 1.8000);
  tempInCelciusRounded = tempInCelcius.toFixed(1);
  return +tempInCelciusRounded;
};

const ctof = function(temp) {
  let tempInFahrenheit = 0;
  tempInFahrenheit = ((temp * 1.8000) + 32);
  tempInFahrenheitRounded = tempInFahrenheit.toFixed(1);
  return +tempInFahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
