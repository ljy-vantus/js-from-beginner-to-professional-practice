let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let arrOfArrays = [someValues1, someValues2, someValues3];

console.log(arrOfArrays);

let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let value1 = arrOfArrays[0][1];
console.log(value1);

let value2 = arrOfArrays[2][2];
console.log(value2);

let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arrOfArrays);

let middleValue = arrOfArraysOfArrays[1][1][1];
console.log(middleValue);