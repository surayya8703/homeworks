// Your JS code is here The Fortune Teller
var numKid = 5;
var partner = 'Osmon';
var geolocation = 'Geogia';
var jobTitle = 'Software Engineer'

var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ', and married to ' 
+ partner + ' ' + ' with ' + numKid + ' kid. ';
console.log(future);
// second part  The Age Calculator
var curYear = 2020
var birthYear = 1987
var age = curYear - birthYear;
console.log('They are either ' + age + ' or ' + (age + 2));
// thir part The Temperature Converter
var celsius = 30;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 10;
var fahrenheitInC = (( fahrenheit - 32) *5)/9;
console.log(fahrenheit + ' °F is ' + fahrenheitInC + '°C');

// Challenge Question: Using Math functions make
var inputFahrenheit = Math.random()*100;
var outputCelsius = (inputFahrenheit - 32)/9 * 5;
console.log('it is ' + inputFahrenheit + '\u00b0 Fahrenheit today. That\'s ' + outputCelsius + '\u00B0 Celsius.');