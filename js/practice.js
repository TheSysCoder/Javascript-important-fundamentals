// Array asigments
// 1. Reverse array elements

const numbers = [2, 11, 55, 3, 7, 33, 88, 34];

const reverseElements = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
};

reverseElements(numbers);
