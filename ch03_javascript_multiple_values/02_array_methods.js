// # Array methods
// ## Adding and replacing elements
// favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push("tangerine");
// console.log(favoriteFruits);

// let lengthOfFavoriteFruits = favoriteFruits.push("lime"); // return the new length of the array
// console.warn(lengthOfFavoriteFruits);
// console.log(favoriteFruits);

// add elements at a certain index
// let arrOfShapes = ["circle", "triangle", "rectangle", "petagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);

// arrOfShapes.splice(2, 2, "square", "trapezoid");
// console.log(arrOfShapes);

// arrOfShapes.splice(2, 12, "square", "trapezoid"); // same as previous splice statement
// console.log(arrOfShapes);

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

// ## Deleting elements
arr8.pop()
console.log(arr8);

arr8.shift()
console.log(arr8);

arr8.splice(1, 3);
console.log(arr8);

delete arr8[0]
console.log(arr8);

// ## Finding elements
arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function(e) { return e === 6; });
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);

let findIndex3 = arr8.indexOf(6, 2);
console.log(findIndex3);

// platypus 鸭嘴兽
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);

// ## Sorting
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names);

let ages = [18, 72, 33, 56, 40];
ages.sort();
console.log(ages);

// ## Reversing
names.reverse()
console.log(names);