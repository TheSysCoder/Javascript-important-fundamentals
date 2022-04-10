// array in javascript

const fruits = ["apple", "orange", "banana"];

console.log(fruits);

const years = new Array(1994, 1997, 1996);
console.log(years[0]);

console.log(fruits.length);

// array operations

const cars = ["AUDI", "BMW", "HONDA", "NEXA"];

// add element
cars.push("SUZUKI");
cars.unshift("MARUTI");

// remove element
cars.pop();
cars.shift();
console.log(cars);

// include method
console.log(cars.includes("AUDI"));

// get Even and Odd numbers from array
const nums = [1, 4, 6, 3, 7, 2, 68, 99, 35, 89];
const even = [];
const odd = [];

for (let i = 0; i <= nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(`${nums[i]} is even number, collecting to array`);
    even.push(nums[i]);
  } else {
    console.log(`${nums[i]} is odd number, colleccting to array`);
    odd.push(nums[i]);
  }
}

console.log("======= RESULT ========");
console.log(`Even numbers ${even}`);
console.log(`Odd numbers ${odd}`);
