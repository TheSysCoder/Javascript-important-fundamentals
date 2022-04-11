// loops in javascript

// for loop in javascrip

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// arrow function for loop
console.log("==========================================");

const loopExample = (range) => {
  for (let i = 0; i <= range; i++) {
    console.log(i);
  }
};

loopExample(2);

// iterate array using loops
console.log("==========================================");
const myArr = ["John", "Mark", "Tom", "Tony"];
const loopArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
loopArray(myArr);
