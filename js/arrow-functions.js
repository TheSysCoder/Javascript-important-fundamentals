// arrow functions

const myAge = (birthYear) => 2020 - birthYear;

console.log(myAge(1994));

const add = (num1, num2) => num1 + num2;
console.log(add(23, 67));

// arrow function with one argument

const greet = (yourName) =>
  console.log(`Welcome ${yourName} to Javascript world!!!`);

greet("Jake");

// arrow functions as expression

const age = 18;
const we = age >= 18 ? () => console.log("Adult") : () => console.log("Baby");
we();

// multiline arrow function

const sum = (a, b) => {
  const result = a + b;
  return result;
};

console.log(sum(34, 67));

// practice all function in one
