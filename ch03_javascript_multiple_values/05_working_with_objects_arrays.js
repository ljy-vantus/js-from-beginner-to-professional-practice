// # Working with objects and arrays
// ## Objects in objects
let company = { companyName: "Healthy Candy",
                activity: "food manufacturing",
                address: {
                    street: "2nd street",
                    number: "123",
                    zipcode: "33116",
                    city: "Miami",
                    state: "Florida"
                },
                yearOfEstablishment: 2021
            };

console.log(company);

company.address.zipcode = "33117";
company["address"]["number"] = "100";
console.log(company);

// ## Arrays in objects
company = { companyName: "Healthy Candy",
                activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
                address: {
                    street: "2nd street",
                    number: "123",
                    zipcode: "33116",
                    city: "Miami",
                    state: "Florida"
                },
                yearOfEstablishment: 2021
            };

let activity = company.activities[1];
console.log(activity);

// ## Objects in arrays
let addresses = [{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    }];

let streetName = addresses[0].street;
console.log(streetName);

// ## Objects in arrays in objects
company = { companyName: "Healthy Candy",
                activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
                addresses: [{
                    street: "2nd street",
                    number: "123",
                    zipcode: "33116",
                    city: "Miami",
                    state: "Florida"
                },
                {
                    street: "1st West avenue",
                    number: "5",
                    zipcode: "75001",
                    city: "Addison",
                    state: "Texas"
                }],
                yearOfEstablishment: 2021
            };

streetName = company.addresses[0].street;
console.log(streetName);