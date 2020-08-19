// object destructuring!

// const person = {
//     name: "andrew",
//     age: 28,
//     location: {
//         city: "philly",
//         temp: 89
//     }
// };

// const { name: firstName = "anonymous", age, } = person;
//     console.log(`${firstName} is ${age}`);


// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(` it is ${temperature} degrees in ${city} `);
// }

// const book = {
//     title: "ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//        name: "penguin"
//     }
// };

// const {name: publisherName = "self-published"} = book.publisher;

// console.log(`${publisherName}`)



// Array destructuring!


const adress = ["7335 12th ave n", "St Pete", "florida", 33710];
const [ , city, state = "new york"] = adress
console.log(`you are in ${city} ${state},`);

const item = [ "coffee (hot)", "$2.00", "$2.50", "$2.75" ];

const [ coffee = "iced coffee", sm, md, lg ] = item

console.log(`A medium ${coffee} cost ${md}`)