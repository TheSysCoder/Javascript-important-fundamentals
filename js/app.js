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
