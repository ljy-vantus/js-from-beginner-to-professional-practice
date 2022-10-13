// # Objects in JavaScript
let arr = [0, 1, 2];
console.log(typeof arr);

let dog = { dogName: "JavaScript",
            weight: 2.4,
            color: "brown",
            breed: "chihuahua",
            age: 3,
            bulglarBiter: true
        };

let dogColor1 = dog["color"];
console.log(dogColor1);

let dogColor2 = dog.color;
console.log(dogColor2);

// ## Updating objects
dog["color"] = "blue";
dog.weight = 2.3;
console.log(dog);

dog["age"] = "three";
console.log(dog);

let variable = "age";
console.log(dog[variable]);

variable = "breed";
console.log(dog[variable]);

dog[variable] = "dachshund";
console.log(dog["breed"]);