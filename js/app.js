// strict mode
"use strict";

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;

if (hasDriversLicence) console.log("I can drive");

// functions
/* 
    function is a code of block for reuse
*/

function logger() {
  console.log("This is a logger function call");
}
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(2, 0);
console.log(appleJuice);

// Function declaration and expressions

// normal function declaration
function calcAge(birtYear) {
  const age = 2022 - birtYear;
  return age;
}

const yourAge = calcAge(1994);
console.log(yourAge);

// annonymus function declaration

const calc_age = function (b_year) {
  const c_age = 2022 - b_year;
  return c_age;
};

console.log(calc_age(1994));
