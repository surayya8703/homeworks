// 1. The Fortune Teller

var numOfchildren = 3,
  partnerName = "D",
  currentLocation = "Chicago",
  jobbTitle = "developer";

console.log(
  "You will be a " +
    jobbTitle +
    " in " +
    currentLocation +
    ", and married to " +
    partnerName +
    " with " +
    numOfchildren +
    " kids"
);

// 2. The Age Calculator

var currentYear = 2020,
  birthYear = 2009;
var age1 = 2020 - 2009;
var age2 = age1 - 1;
console.log("They are either " + age1 + " or " + age2);

// 3. The Temperature Converter

var celsiusTemp = 28;
var fahrenheit = (celsiusTemp * 9) / 5 + 32;
console.log(celsiusTemp + "\u00B0C is " + fahrenheit + "\u00B0F");

var fahrenheit2 = 90;
var celsius = ((fahrenheit2 - 32) * 5) / 9;
console.log(fahrenheit2 + "\u00B0F is " + celsius + "\u00B0C");

// 4. Challenge Question: Using Math functions

var fahrenheit2 = Math.random() * 100;
var celsius = ((fahrenheit2 - 32) * 5) / 9;
console.log(fahrenheit2 + "\u00B0F is " + celsius + "\u00B0C");
