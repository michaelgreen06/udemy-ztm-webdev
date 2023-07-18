// change everything below to the newer Javascript!

// let + const
let a = "test";
const b = true;
const c = 789;
a = "test2";

// Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

var { firstName, lastName, age, eyeColor } = person;

// Object properties
const a = "test";
const b = true;
const c = 789;

var okObj = {
  a: a,
  b: b,
  c: c,
};

const okObj = { a, b, c };

// Template strings
var message =
  "Hello " +
  firstName +
  " have I met you before? I think we met in " +
  city +
  " last summer no???";

const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer, no??`;

// default arguments
// default age to 10;
function isValidAge(age = 10) {
  return age;
}

// Symbol
// Create a symbol: "This is my first Symbol"
const sym1 = Symbol();
const sym2 = Symbol("michael0");

// Arrow functions
function whereAmI(username, location) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

const whereAmI = (username, location) => {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
};
