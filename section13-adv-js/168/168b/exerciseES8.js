// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

// it should look like this:
("     ||<- Start line");
("       🐢");
("       🐇");

// when you do:
console.log(startLine);
console.log(turtle.padStart(9));
console.log(rabbit.padStart(9));

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, "=");
// I get 🐢=======
//the 2nd parameter is the character that the string is padded w/

// #3) Get the below object to go from:
let obj = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
// to this:
("my name is Rudolf the raindeer");

let newString = "";

Object.entries(obj).forEach(function (value) {
  newString += ` ${value[0]} ${value[1]}`;
});

console.log(newString);

for (let [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`);
}
