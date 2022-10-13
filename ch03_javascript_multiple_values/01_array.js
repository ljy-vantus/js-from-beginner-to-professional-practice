// # Arrays and their properties
// ## Creating arrays
// arr1 = new Array("purple", "green", "yellow");
// arr2 = ["black", "orange", "pink"]
// console.log(arr1);
// console.log(arr2);
// arr3 = new Array(10);
// arr4 = [10];
// console.log(arr3);
// console.log(arr4);

// let arr = ["hi there", 5, true];
// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);

// const arr5 = ["hi there"]
// arr5[0] = "new value";
// console.log(arr5[0]);
// TypeError: Assignment to constant variable.
// arr5 = ["nope, now you are overiting the array"];

// ## Accessing elements
// cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);

// The following statements do not throw errors.
// console.log(cars[3]); // undefined
// console.log(cars[-1]); // undefined

// ## Overwriting elements
// cars[0] = "Tesla";
// console.log(cars[0]);

// console.log(cars);

// Overwirte an element that does not exist
// cars[3] = "Kia";
// console.log(cars);

// cars[-1] = "Fiat"
// console.log(cars);

// ## Built-in length property
colors = ["black", "orange", "pink"];
booleans = [true, false, false, true];
emptyArray = [];

console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);

lastElement = colors[colors.length - 1];
console.log(lastElement);

numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);

console.log("numbers", numbers);
